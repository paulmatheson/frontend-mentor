const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input[type="radio"]')
const submitBtn = document.getElementById('submit-button')
const ratingModule = document.querySelector('.rating-module')
const tyModule = document.querySelector('.ty-module')

inputs.forEach(input => {
    input.addEventListener("click", function () {
        labels.forEach(label => {
            label.classList.remove("selected") // remove .selected class from non-chosen rating
        })
        this.nextElementSibling.classList.add("selected") // add .selected class to chosen rating
    })
})

submitBtn.addEventListener("click", () => {
    ratingModule.style.display = "none"
    tyModule.style.display = "initial"
})
