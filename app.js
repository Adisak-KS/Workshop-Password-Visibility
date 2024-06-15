const eyeIcon = document.querySelector("#eye")
const passswordEl = document.querySelector("#password")

eyeIcon.addEventListener("click", ()=>{
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
        passswordEl.setAttribute("type","text")
    }else{
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
        passswordEl.setAttribute("type","password")
    }
})
