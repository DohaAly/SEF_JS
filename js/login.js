let username =document.querySelector("#username")
let password=document.querySelector("#password")
let lodinbtn=document.querySelector("#Sign_in")

let getUsername=localStorage.getItem("username")
let getPassword =localStorage.getItem("password")
lodinbtn.addEventListener("click",function(e)
{
e.preventDefault()
if(username.value==="" || password.value==="")
{
    alert("please enter your data")
}else
{
    if(getUsername && getUsername.trim()===username.value.trim() && getPassword && getPassword.trim()===password.value.trim())
    {
        setTimeout( ()=>{
             window.location="index.html"
        },1500 )
    }
    else
    {
        alert("username or password is wrong")
    }
}





})