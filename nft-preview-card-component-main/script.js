let headerImg = document.getElementById('header-image')
let bgCover = document.getElementById('bg-cover')
let iconView = document.getElementById('icon-view')

headerImg.addEventListener("mouseenter", (e) => {
    bgCover.style.display = "flex"
    iconView.style.display = "initial"
})

headerImg.addEventListener("mouseleave", (e) => {
    bgCover.style.display = "none"
    iconView.style.display = "none"
})