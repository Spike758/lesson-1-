let section = document.querySelector('section')
let title = section.querySelector('h1')
title.innerHTML = "Private Nill Kigger so cool!"

let image = section.querySelector('img')
image.setAttribute('src','./assets/img/accessories.jpg')

let covers = document.querySelectorAll('.cover')

let card = document.querySelector('.cards')
let price = card.querySelector('.price')
price.innerHTML = '300$'

console.log(price.innerHTML)

let num4 = 4
for(let i = 1; i <= 10; i++){
    if(i % 2 == 1){
        console.log(num4 + "*" + i + "=" + num4 * i)
    }
}

array = [352,321,36,34,18]
array.forEach(number => {
    console.log(number)
});

let students = ["Taki", "Maki", "Saki", "Gapon4ik"]
students.forEach(name => {
    if(name == "Gapon4ik"){
        console.log(name)
    }
});