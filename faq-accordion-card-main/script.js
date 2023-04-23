let accItem = document.querySelectorAll("li")

accItem.forEach((item) => {
    item.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        const accItems = document.querySelectorAll("li");
        accItems.forEach((item) => {
            item.nextElementSibling.classList.add("hidden");
            item.classList.remove("bold");
            item.classList.remove("active");
            item.querySelector(".icon").classList.remove("rotate");
        });
        if (!isOpen) {
            item.nextElementSibling.classList.remove("hidden");
            item.classList.add("bold");
            item.classList.add("active");
            item.querySelector(".icon").classList.add("rotate");
        }
    });
});