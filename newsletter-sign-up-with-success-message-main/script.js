let form = document.getElementById('form')
let btnDismiss = document.getElementById('btn-dismiss')

let mainContent = document.getElementById('main-content')
let success = document.getElementById('section-success')

form.addEventListener('submit', e => {
    e.preventDefault()
    form.reset()
    mainContent.style.display = "none"
    success.style.display = "unset"
})

btnDismiss.addEventListener('click', e => {
    mainContent.style.display = "unset"
    success.style.display = "none"
})