// Class for an appointment
function Appointment(type, date, time, location) {
    this.type = type
    this.date = date
    this.time = time
    this.location = location
}

var feb01_22 = new Appointment("Tartan Testing", "Tuesday, February 1, 2022", "10:00 AM", "TCS Hall");

// const appts = [feb01_22];
// const appts = [];
 
// localStorage.setItem("appts", JSON.stringify(appts));

// Loading logged in home page
function onLoad() {
    var upcomingAppts = document.getElementById("upcoming-summary");

    // If there are no upcoming appts
    var appointments = JSON.parse(localStorage.getItem("appts"));
    if (appointments === null) {
        
        var noApptsNotice = document.createElement("p");
        noApptsNotice.innerHTML = "You have no upcoming appointments.";
        upcomingAppts.parentNode.insertBefore(noApptsNotice, upcomingAppts);
        upcomingAppts.parentNode.removeChild(upcomingAppts);
    } 
    // If there are upcoming appts
    else {
        for (i = 0; i < appointments.length; i++) {
            // Adding a new row
            var row = upcomingAppts.insertRow(i);

            // Adding the data of the appointment
            var data = row.insertCell(0);
            var appt = appointments[i];

            data.innerHTML = `<h4>${appt.type}</h4>
                              <p>${appt.date}<br>
                                 ${appt.time}<br><br>
                                 ${appt.location}
                                 <button class="button button-gray">Cancel</button>
                              </p>`


        }
    }
}