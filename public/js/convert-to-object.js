// Saving the localStorage data into objects

// Selecting confirmation button
const confirmButton = document.querySelector("#confirm-button");
console.log(confirmButton);

confirmButton.onclick = event => {
    event.preventDefault() // preventing the default action
    
    var apptType = JSON.parse(localStorage.getItem("apptType"));
    var apptDate = JSON.parse(localStorage.getItem("apptDate"));
    var apptTime = JSON.parse(localStorage.getItem("apptTime"));

    var newAppt = new Appointment(apptType, apptDate, apptTime, "TCS Hall")

    var appointments = JSON.parse(localStorage.getItem("appts"));

    if (appointments === null) {
        appointments = [];
    }
    appointments.push(newAppt);
    localStorage.clear();
    
    localStorage.setItem("appts", JSON.stringify(appointments));

    window.location.href = "appt-confirmation.html";
}