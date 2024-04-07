let productsInCart =localStorage.getItem(" productsInCart")
let all_products =document.querySelector(".products")
if( productsInCart)
{
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}
function drawCartProducts (products)
{
    let y =products.map((item) =>{
    return ` <div class="product_item">
    <img class="product_item_img" src="${item.imageUrl}" alt="">
    <div class="product_item_desc">
        <h2>${item.title}</h2>
        <p>the new watch from company ice-watch</p>
        <span>${item.color}</span>
    </div>
    <div class="product_item_action">
        <button class="add_to_cart" onClick=" removeFromCart(${item.id})">removeFromCart</button>

    </div>
</div>`
    })
    all_products.innerHTML=y;
}