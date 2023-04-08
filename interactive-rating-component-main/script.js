const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input[type="radio"]')

inputs.forEach(input => {
    input.addEventListener("click", function () {
        labels.forEach(label => {
            label.classList.remove("selected") // remove .selected class from non-chosen rating
        })
        this.nextElementSibling.classList.add("selected") // add .selected class to chosen rating
    })
})