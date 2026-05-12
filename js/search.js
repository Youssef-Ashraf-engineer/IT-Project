function search(){
  if(!document.querySelector("#checkininput").value || !document.querySelector("#checkoutinput").value){
    alert("empty check in or check out");
    return;
  }
  let hotels = document.querySelectorAll(".hotel-card")
  let placevalue = document.querySelector("#place").value;
  let numbervalue =parseInt(document.querySelector("#number-input").value);
  const checkin = new Date(document.querySelector("#checkininput").value);
  const checkout = new Date(document.querySelector("#checkoutinput").value);
  hotels.forEach(hotel => {
    let place = hotel.dataset.place;
    let number = parseInt(hotel.dataset.number);
    const start= new Date(hotel.dataset.start);
    const end= new Date(hotel.dataset.end);
    console.log(end);
    console.log(checkout)
    if(place!==placevalue && placevalue!="all"|| !(checkin>=start && checkout<=end) || number>numbervalue && numbervalue!=0){
      hotel.parentElement.parentElement.style.display="none";
    }
    else{
      hotel.parentElement.parentElement.style.display="block";
    }
    console.log(number);
    console.log(numbervalue)
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