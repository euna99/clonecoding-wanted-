// let sign=document.querySelector("#sign")
let sign_close_btn=document.querySelector(".sign_close_btn")
let sign_background=document.querySelector(".sign_background")
sign.addEventListener("click",function(event){
    sign_background.style.display="block"
})
sign_close_btn.addEventListener("click",function(event){
    sign_background.style.display="none"
})