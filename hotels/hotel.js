const items = document.querySelectorAll(".menu .item");
const tabs = document.querySelectorAll(".tab");

items.forEach(item => {
    item.addEventListener("click", () => {

        // remove active
        tabs.forEach(tab => tab.classList.remove("active"));
        items.forEach(item => item.classList.remove("current"));


        const target = item.getAttribute("data-tab");
        item.classList.add("current");
        document.getElementById(target).classList.add("active");

    });
});

const rows = document.querySelectorAll(".rooms-table tbody tr");
const grandTotal = document.getElementById("grandTotal");

rows.forEach(row => {
    const radio = row.querySelector("input");
    const nightsSelect = row.querySelector(".nights");
    const totalCell = row.querySelector(".total");

    function updateTotal(){
        const price = parseInt(row.dataset.price);
        const nights = parseInt(nightsSelect.value);
        const total = price * nights;
        totalCell.textContent = "$" + total;

        if(radio.checked){
            grandTotal.textContent = "$" + total;
        }
    }

    row.addEventListener("click", () => {
        rows.forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        radio.checked = true;
        updateTotal();
    });

    nightsSelect.addEventListener("change", updateTotal);
});