let nav = document.querySelector("nav")

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
   
})