let details = document.querySelectorAll("details")

details.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", (event) => {

        if (targetDetail.open == true) {
            targetDetail.querySelector(".icon").style.transform = 'rotate(-180deg)';
            details.forEach(innerDetail => {
                if (innerDetail != targetDetail) {
                    innerDetail.open = false
                }
            })
        } else {
            targetDetail.querySelector(".icon").style.transform = 'rotate(-360deg)'
        }
    });
})