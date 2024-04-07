//localStorage.setItem("first car","BMW")
// console.log(localStorage.getItem("first car"))
// localStorage.setItem("student1","Doha")
// localStorage.getItem("student1")
// localStorage.removeItem("student1")
//localStorage.setItem("family","Ali")
//localStorage.clear() //remove all data in local storage

let userinfo=document.querySelector("#user-info")
let user_data =document.querySelector("#user")
let links=document.querySelector("#link")
if(localStorage.getItem("username"))
{
links.remove()
userinfo.style.display="flex"
user_data.innerHTML=localStorage.getItem("username")
}
let logOutBtn=document.querySelector("#log_out")
logOutBtn.addEventListener("click",function ()
{
    localStorage.clear();
    setTimeout(()=> {
window.location="login.html"
    }, 1500)
})
///////////////////////////////////////////////////////////////////////
let all_products =document.querySelector(".products")
let products =[
{
id:1,
title:"watch",
color:"beige",
imageUrl:"images/wrist-watches.jpg"
},
{
    id:2,
    title:"Eva",
    color:"pink",
    imageUrl:"images/download (1).jpg"
    },
    {
        id:3,
        title:"cosmotics",
        color:"white",
        imageUrl:"images/download.jpg"
        },
        {
            id:4,
            title:"perfume",
            color:"coffee",
            imageUrl:"images/istockphoto-1546442230-170667a.webp"
            },
]
function drawItems ()
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
        <button class="add_to_cart" onClick=" addToCart(${item.id})">Add To Cart</button>
        <i class="fa fa-heart fav"></i>
    </div>
</div>`
    })
    all_products.innerHTML=y;
}
drawItems()
let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

//let addedItem = [];
let addedItem = localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")) : [];
if(addedItem)
{
    addedItem.map(item =>{
        cartProductDiv.innerHTML +=`<p>${item.title}</p>`;

    })
    badge.style.display ="block";
    badge.innerHTML =addedItem.length;
}
let removeItem1 =localStorage.clear()
badge.style.display ="block";
badge.innerHTML -= cartProductsLength.length;
/////////////////////////////////////////////////////////
    if(localStorage.getItem=("username"))
    {
        function addToCart(id)
{
let selectedItem  = products.find((item)=> item.id===id);
cartProductDiv.innerHTML +=`<p>${selectedItem .title}</p>`;

addedItem = [...addedItem,selectedItem]
localStorage.setItem("ProductsInCart",JSON.stringify(addedItem))

let cartProductsLength= document.querySelectorAll(".carts_products div p")
badge.style.display="block";
badge.innerHTML = cartProductsLength.length;
}
    }
    else{
        window.location="login.html"
    }
// let cartProductDiv  =document.querySelector(".carts_products div")
//////////////////////////////////
let shoppingCartIcon=document.querySelector(".shopping_cart")
let cartsProducts=document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click",opencart)
function opencart(){
    if( cartProductDiv.innerHTML !=="" )
    {
        if(cartsProducts.style.display=="block")
        {
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}
// cartsProducts.addEventListener("click",viewproduct)
// function viewproduct ()
// {


// }
