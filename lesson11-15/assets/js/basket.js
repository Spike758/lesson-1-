let products = [
    {
        img: "../assets/img/t-shirt.png",
        title: "super puper t-shirt",
        price: 45,
        size: "L",
        color: "gray"
    },
    {
        img: "../assets/img/t-shirt.png",
        title: "super legend t-shirt",
        price: 50,
        size: "XXL",
        color: "orange"
    },
    {
        img: "../assets/img/t-shirt.png",
        title: "super arcana t-shirt",
        price: 35,
        size: "XL",
        color: "black"
    }
]





const cardBasket = () =>{
    let product_container = document.querySelector('.basket .selected-products')
    products.forEach(product=>{
        let html_product = `
        <div class="product">
            <div class="column" id="first">
                <div class="card">
                    <div class="cover">
                        <img src=${product.img} alt="">
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="card-desc">
                    <p class="name">${product.title}</p>
                    <div class="settings">
                        <div class="ellipse" id="${product.color}"></div>
                        <p class="size">${product.size}</p>
                    </div>
                </div>
            </div>
            <div class="column" id="second">
                <p>${product.price}$</p>
            </div>
            <div class="column" id="third">
                <div class="counter">
                    <input type="button" value="-" class="btn minus" onclick="changeCount('minus',this)">
                    <p class="quantity">1</p>
                    <input type="button" value="+" class="btn plus" onclick="changeCount('plus',this)">
                </div>
            </div>
            <div class="column" id="fourth">
                <p>${product.price}$</p>
            </div>
            <div class="column" id="fifth">
                <p class="delete" onclick="deleteProduct()">X</p>
            </div>
        </div>
        `
        product_container.innerHTML += html_product
    })
}
function deleteProduct(){
    let product = document.querySelector('.product')
    product.setAttribute('style','display:none;')
}
// function changePrice(change = 0){
//     // получаем цену в виде тега
//     let price_html = document.querySelector('.basket .product #second p')
//     // извлекаем содержимое тега
//     let price = price_html.innerHTML
//     // заменяем знак $
//     price = price.replace('$','')
//     // преобразуем строку в число
//     price = parseFloat(price)
//     let new_price = price - change
//     if(new_price>price){
//         price_html.style.color = 'red'
//     } 
//     else if(new_price == price){
//         price_html.style.color = 'blue'
//     }
//     else{
//         price_html.style.color = 'green'
//     }
//     price_html.innerHTML =  new_price + '$'
//     console.log(price)
// }
// changePrice(10)

// const counter = () =>{
//     let counter_html = document.querySelector('.basket .quantity')
//     let number = counter_html.innerHTML
//     number = parseFloat(number)
//     let count = number + 1
//     counter_html.innerHTML = count
//     console.log(count)
//     let total_html = document.querySelector('.basket .product #fourth p')
//     let price_html = document.querySelector('.basket .product #second p')
//     let price = price_html.innerHTML
//     price = price.replace('$','')
//     price = parseFloat(price)
//     let new_total = price * count
//     total_html.innerHTML = new_total + '$'
// }
// const minus = () =>{
//     let counter_html = document.querySelector('.basket .quantity')
//     let number = counter_html.innerHTML
//     let total_html = document.querySelector('.basket .product #fourth p')
//     let price_html = document.querySelector('.basket .product #second p')
//     let price = price_html.innerHTML
//     price = price.replace('$','')
//     price = parseFloat(price)
//     number = parseFloat(number)
//     if ( number > 1 ){
//         let count = number - 1
//         counter_html.innerHTML = count
//         let new_total = price * count
//         total_html.innerHTML = new_total + '$'
//     }
//     else{
//         counter_html.innerHTML = 1
//     }
    
    
// }
