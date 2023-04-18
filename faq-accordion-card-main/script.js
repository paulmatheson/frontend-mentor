let accItem = document.querySelectorAll("li")

accItem.forEach(item => {
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("hidden")
        item.classList.toggle("bold")
        console.log(item.children[0].classList.toggle("rotate"))
    })
})