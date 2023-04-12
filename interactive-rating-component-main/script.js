const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input[type="radio"]')
const form = document.querySelector('.rating-form')
const ratingModule = document.querySelector('.rating-module')
const tyModule = document.querySelector('.ty-module')
let chosen

inputs.forEach(input => {
    input.addEventListener("click", function () {
        labels.forEach(label => {
            label.classList.remove("selected") // remove .selected class from non-chosen rating
        })
        this.nextElementSibling.classList.add("selected") // add .selected class to chosen rating
        chosen = this.value
    })

})

form.addEventListener("submit", () => {
    ratingModule.style.display = "none"
    tyModule.style.display = "flex"
    document.getElementById("user-rating").innerHTML = chosen
})
