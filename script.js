function search(){
    let hotels = document.querySelectorAll(".hotel-card")
    let placevalue = document.querySelector("#palce-select").value
    let datevalue = document.querySelector("#Date-select").value
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