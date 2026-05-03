fetch("../hotels.json")
.then(res => res.json())
.then(data =>{
    const container = document.getElementById("hotelsContainer")
    container.innerHTML=""
    data.hotels.forEach(h=>{
        const card = document.createElement("div")
        // card.className="hotels-item"
        card.innerHTML=`
        
        <a href="hotel.html?id=${h.id}">
                    <div class="hotel-card" data-place="${h.gov}" data-start="${h.start}" data-end="${h.end}" data-number="${h.av}">
                        <img src="images/llllllll.jpg" alt="">
                        <div class="cardbody">
                            <h3 id="hotelName">${h.name}</h3>
                            <p id="location">📍${h.location}</p>
                            <p id="rating">${h.rating}</p>
                            <p id="description">${h.description}</p>
                            <h5 id="price">⭐${h.rating}$/night</h5>
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