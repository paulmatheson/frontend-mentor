let accItem = document.querySelectorAll("li")

accItem.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon.nextElementSibling)
        icon.nextElementSibling.classList.toggle("hidden")
        //icon.classList.add()
    })
})