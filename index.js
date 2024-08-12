window.addEventListener("scroll", () => {
    const header = document.querySelector("header")

    if (window.scrollY > 100) {
        header.classList.add("bg-black/90")
        header.classList.add("backdrop-blur-sm")
    } else {
        header.classList.remove("bg-black/90")
        header.classList.remove("backdrop-blur-sm")
    }
})


const button = document.querySelector("button")
const colseMenu = document.querySelector(".colseMenu")

button.addEventListener("click", navToggleFunction)
colseMenu.addEventListener("click", navToggleFunction)

function navToggleFunction() {
    const mobileNav = document.querySelector(".mobileNav")
    if (mobileNav.classList.contains("-right-full")) {
        mobileNav.classList.add("right-4")
        button.classList.add("hidden")
        mobileNav.classList.remove("-right-full")
    } else {
        mobileNav.classList.add("-right-full")
        mobileNav.classList.remove("right-4")
        button.classList.remove("hidden")
    }
}