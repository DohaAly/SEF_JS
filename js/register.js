let username =document.querySelector("#username")
let password =document.querySelector("#password")
let email= document.querySelector("#Email")
let registerbtn = document.querySelector("#Sign_UP")

registerbtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || email.value==="" || password.value==="")
    {
        alert("please fill data")
    }
     else 
    {
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value);
        
        //go to login 
        setTimeout(  ()=>{
           window.location="login.html"
        },1500
        )
    }
})