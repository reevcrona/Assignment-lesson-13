const overlay = document.querySelector(".overlay-nav");
const burgerMenu = document.querySelector("#burger-menu");
const overlayX = document.querySelector("#overlay-x");



burgerMenu.addEventListener("click",() => {

    if(!overlay.classList.contains("active")){
        overlay.classList.add("active");
    }
})

overlayX.addEventListener("click", () => {
    overlay.classList.remove("active");
})





