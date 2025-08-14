let nav = document.querySelector(".header nav")

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
   
})