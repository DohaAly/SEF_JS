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