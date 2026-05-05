fetch("js/hotels.json")
.then(res => res.json())
.then(data =>{
    const container = document.getElementById("hotelsContainer")
    container.innerHTML=""
    data.hotels.forEach(h=>{
        const card = document.createElement("div")
        // card.className="hotels-item"
        card.innerHTML=`
        
        <a href="pages/hotel.html?id=${h.id}">
                    <div class="hotel-card" data-place="${h.gov}" data-start="${h.start}" data-end="${h.end}" data-number="${h.price}">
                        <img src="images/gallery/hotel${h.id}/img (1).jpg" alt="">
                        <div class="cardbody">
                            <h3 class="hotelName">${h.name}</h3>
                            <p class="location">📍${h.location}</p>
                            <p class="description">${h.description}</p>
                            <h5 class="price">⭐${h.rating}</h5>
                            <h5 class="price">${h.price} EGP/night</h5>
                            <button>view</button>
                        </div>
                    </div>  
                </a>
        
        `
        container.appendChild(card)

    })
    
    
})


document.querySelectorAll(".hotels-item").forEach(h=>{
    h.hotelName=""
    h.location=""
    h.rating=""
    h.description=""
    h.price=""
    h.hotelName=""

})