const date = new Date();
let weeklist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let monthlist = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
for (let i = 0; i< new Date(date.getFullYear(),date.getMonth()+1,0).getDate();i++){
    let date1 = new Date(2022,date.getMonth(),i+1)
    if (date1.getDay() === 5  || date1.getDay() === 0 ||date1.getDay() === 6){
        const newDiv = document.createElement("p");
        const createButton = document.createElement("button")
        createButton.setAttribute("id",i);
        newDiv.appendChild(document.createTextNode((i+1).toString()+" "+monthlist[date1.getMonth()]+" "+weeklist[date1.getDay()] + "1PM-2PM"))
        createButton.appendChild(document.createTextNode("BOOK"));
        const currentDiv = document.getElementById("booking-sys");
        currentDiv.appendChild(newDiv);
        currentDiv.appendChild(createButton);
        createButton.addEventListener("click",function uploadbooking(){
            localStorage.setItem("bookingdate",date1);
            alert("Appointment booked on: "+date1);
        })
    }

}
