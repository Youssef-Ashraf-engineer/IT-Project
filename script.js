function search(){
    let hotels = document.querySelectorAll(".hotel-card")
    let placevalue = document.querySelector("#place").value
    let datevalue = document.querySelector("#date").value
    let numbervalue = document.querySelector("#number-input").value
    hotels.forEach(element => {
        let place = element.dataset.place;
        let dates = element.dataset.date;
        let number = element.dataset.number;
        if(place!==placevalue && placevalue!="all"){
            element.style.display="none"
        }
        else if(!dates.includes(datevalue) && datevalue!="all"){
            element.style.display="none"
        }
        else if(number<numbervalue && numbervalue!=0){
            element.style.display="none"
        }
        else{
            element.style.display="block"
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


const dateinput = document.getElementById("dateInput");
const datedropdown = document.getElementById("datedropdown");
const date = document.getElementById("date");


dateinput.addEventListener("focus", () => {
  datedropdown.style.display = "block";
});

document.querySelectorAll("#datedropdown div").forEach(item => {
  item.onclick = () => {
    dateinput.value = item.textContent;
    datedropdown.style.display = "none";
    date.value=item.textContent;
  };
});