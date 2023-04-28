const users = [
    {
        id: 1,
        login: 'test',
        password: 'qwerty',
        phone: '777'
    }
]

let phoneAuth = document.querySelector('#auth input[type=tel]')
let phoneReg = document.querySelector('#reg input[type=tel]')
const maskOptions = {
    mask:'+{7}(000)000-00-00'
}
// сохраняем замаскированный телефон
let maskedPhoneAuth = IMask(phoneAuth, maskOptions)
let maskedPhoneReg = IMask(phoneReg, maskOptions)

const login = () => {
    let email = document.querySelector('#auth input[type=email]').value
    let phone = maskedPhoneAuth.unmaskedValue // получаем значение без маски
    let password = document.querySelector('#auth input[type=password]').value

    users.forEach(user => {
        if(user.login === email && user.password === password && user.phone === phone){
            window.location = 'app.html'
        }
    })
}

const reg = () => {
    let user_email = document.querySelector('#reg input[type=email]').value
    let user_phone = maskedPhoneReg.unmaskedValue // получаем значение без маски
    let user_password = document.querySelector('#reg input[type=password]').value

    users.push({
        id:2,
        login: user_email,
        password: user_password,
        phone: user_phone
    })

    document.querySelector('#reg').classList.remove('open')
    document.querySelector('#auth').classList.add('open')
}

const navigate = (e) => {
    document.querySelector('#reg').classList.add('open')
    document.querySelector('#auth').classList.add('open')
    e.parentNode.classList.remove('open')      
}