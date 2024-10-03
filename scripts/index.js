const overlay = document.querySelector(".overlay-nav");
const burgerMenu = document.querySelector(".burger-menu");




burgerMenu.addEventListener("click",() => {

    if(!overlay.classList.contains("active")){
        overlay.classList.add("active")
    }
})





