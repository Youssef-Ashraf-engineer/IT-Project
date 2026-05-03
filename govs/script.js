function filterHotels() {
    const hotels = document.querySelectorAll('.hotel-card');

    const searchVal = document.getElementById("searchInput").value.toLowerCase();
    const starsVal = document.getElementById("starsFilter").value;

    hotels.forEach(hotel => {
        const name = hotel.querySelector("h3").innerText.toLowerCase();
        const stars = hotel.getAttribute("data-stars");

        let visible = true;

        
        if (!name.includes(searchVal)) visible = false;

        
        if (starsVal !== "all" && stars !== starsVal) visible = false;

        hotel.style.display = visible ? "flex" : "none";
    });
}

function clearFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("starsFilter").value = "all";
    filterHotels();
}