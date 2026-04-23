const items = document.querySelectorAll(".menu .item");
const tabs = document.querySelectorAll(".tab");

items.forEach(item => {
    item.addEventListener("click", () => {

        // remove active
        tabs.forEach(tab => tab.classList.remove("active"));

        const target = item.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");

    });
});