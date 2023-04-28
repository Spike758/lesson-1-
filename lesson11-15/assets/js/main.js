let cards = [
    {
        img: "./assets/img/clothes.jpg",
        title: "T-shirt winter collection",
        price: 45
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker",
        price: 50
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 30
    }
]


const setCards = () => {
    let cards_container = document.querySelector('.cards .container')
    cards.forEach(card =>{
    let html_card = `
    <div class="card">
                        <div class="cover">
                            <img src=${card.img} alt="">
                            <div class="circle"></div>
                        </div>
                        <div class="card-content">
                            <h4>${card.title}</h4>
                            <p class="price">${card.price}</p>
                        </div>
                    </div>
    `
    cards_container.innerHTML += html_card
})
}
const sortCards = () => {
    cards.sort((a,b) => {
        return b.price - a.price
    })
}

sortCards()

const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage');

    pages.forEach(page =>{
        page.classList.remove('open')

        page.classList.forEach(class_name =>{
            if(class_name === page_name){
                page.classList.add('open')
            }
        })

    })
}

const changeCount = (action,element) =>{
    let basket_item = element.closest('.product')
    let count_html = basket_item.querySelector('.quantity')
   
    let count = parseInt(count_html.innerHTML)
    console.log(basket_item)
   if(action === 'minus'){
    if( count > 1){
        count -=1
    }
   }
    else{
        count +=1
    }
    if(element.parentNode.parentNode.parentNode.classList.contains('product')){
        let total = basket_item.querySelector('#fourth p')
        let price = parseFloat(basket_item.querySelector('#second p').innerHTML.replace('$',''))
        total.innerHTML = (price * count) + '$' 
    }
   
    count_html.innerHTML = count
}

const changeCheckbox = (e) => {
    // получаем родителя у скрытого чекбокса
    let label = e.parentElement
    // находим стилизованный чекбокс
    let checkbox = label.querySelector('.checkbox')
    // переключаем класс у чекбокса 
    checkbox.classList.toggle('checked')
}

const setCheckbox = () => {
    let checkbox_array = document.querySelectorAll('input[type=checkbox]')
    checkbox_array.forEach(item => {
        if(item.checked){
            item.parentElement.querySelector('.checkbox').classList.add('checked')
        }
    })
}

const setSize = (e) => {
    // получаем все размеры со страницы
    let size_array = e.parentElement.querySelectorAll('p')
    // перебираем размеры по одному
    size_array.forEach(item =>{
        // у всех размеров удаляем класс 'active'
        item.classList.remove('active')
    })
    // устанавливаем выбранному размеру активность
    e.classList.toggle('active')
}

const setColor = (e) => {
    let color_array = e.parentElement.parentElement.querySelectorAll('.elipse')
    color_array.forEach(item =>{
        item.classList.remove('active')
    })
    e.classList.toggle('active')
}