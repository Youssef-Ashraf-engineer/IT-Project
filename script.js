function search(){
  if(!document.querySelector("#checkininput").value || !document.querySelector("#checkoutinput").value){
    alert("empty check in or check out")
    return
  }
  let hotels = document.querySelectorAll(".hotel-card")
  let placevalue = document.querySelector("#place").value
  let numbervalue = document.querySelector("#number-input").value
  const checkin = new Date(document.querySelector("#checkininput").value);
  const checkout = new Date(document.querySelector("#checkoutinput").value);
  hotels.forEach(hotel => {
    let place = hotel.dataset.place;
    let number = hotel.dataset.number;
    const start= new Date(hotel.dataset.start);
    const end= new Date(hotel.dataset.end);
    if(place!==placevalue && placevalue!="all"){
      hotel.style.display="none"
    }
    else if(!(checkin>=start && checkout<=end)){
      hotel.style.display="none"
    }
    else if(number<numbervalue && numbervalue!=0){
      hotel.style.display="none"
    }
    else{
      hotel.style.display="block"
    }
  });
}

const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const place = document.getElementById("place");


input.addEventListener("focus", () => {
  dropdown.style.display = "block";
});

document.querySelectorAll(".dropdown div").forEach(item => {
  item.onclick = () => {
    input.value = item.textContent;
    dropdown.style.display = "none";
    place.value=item.textContent;
  };
});