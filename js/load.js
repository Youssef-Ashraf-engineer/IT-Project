let hotelId = new URLSearchParams(window.location.search).get("id")
// const hotelId = 1
if (!hotelId){
  console.warn("mising id param default id is choosed");
  alert("mising id param default id is choosed")
  
  hotelId=1
}
fetch("../hotels.json").then(res => res.json()).then(data =>{
    const hotel = data.hotels.find(h=>h.id == hotelId)
    loadHotel(hotel)
})
function loadHotel(hotel){
    console.log(hotel)
    document.querySelector(".header h1").textContent =hotel.name
    document.querySelector(".header p").textContent =hotel.description
    document.querySelector(".info .box:nth-child(1) p").textContent =hotel.location
    document.querySelector(".info .box:nth-child(2) p").textContent =hotel.contact
    document.querySelector(".info .box:nth-child(3) a").href =hotel.website
    document.querySelector(".info .box:nth-child(3) a").textContent =hotel.website
    document.querySelector("#rating-overview").textContent =hotel.ratingOverview
    document.querySelector("#location-overview").textContent =hotel.locationOverview
    document.querySelector("#rooms-overview").textContent =hotel.roomsOverview
    document.querySelector("#price-overview").textContent =hotel.price
    document.querySelector("#check-in-overview").textContent =hotel.check
    document.querySelector("#features-overview").textContent =hotel.features
const faqContainer = document.querySelector("#faq");

faqContainer.innerHTML = "<h2>Guest Help Center</h2>";

hotel.faq.forEach(item => {
  const div = document.createElement("div");
  div.className = "faq";

  div.innerHTML = `
    <h3> ${item.title}</h3>
    <p>${item.content}</p>
  `;

  faqContainer.appendChild(div);
});
const reviewsContainer = document.querySelector("#reviews");

reviewsContainer.innerHTML = "<h2>Reviews</h2>";

hotel.reviews.forEach(r => {
  const div = document.createElement("div");
  div.className = "review";

  div.innerHTML = `
    <h4>${"⭐".repeat(r.rating)} - ${r.name}</h4>
    <p>${r.comment}</p>
  `;

  reviewsContainer.appendChild(div);
});


const featuresContainer = document.querySelector(".features-container");

featuresContainer.innerHTML = "";

hotel.why.forEach(f => {
  const div = document.createElement("div");

  div.innerText=f;

  featuresContainer.appendChild(div);
});

    const images = document.querySelectorAll(".images img")
    images.forEach((img,index)=>{
        if(hotel.images[index]){
            img.src ="../images/gallery/hotel"+hotel.id+"/img"+index+".jpg"
        }
    }
    
    )
}