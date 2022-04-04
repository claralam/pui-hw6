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

    var appointments = JSON.parse(localStorage.getItem("appts"));
    
    // If there are no upcoming appts
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
            row.id = `${i}`

            // Adding the data of the appointment
            var data = row.insertCell(0);
            var appt = appointments[i];

            data.innerHTML = `<h4>${appt.type}</h4>
                              <p>${appt.date}<br>
                                 ${appt.time}<br><br>
                                 ${appt.location}
                                 <button class="button button-gray cancel-button" onclick="deleteAppt(this.closest('tr'))">Cancel</button>
                              </p>`


        }
    }
}

// Cancel button
const cancelButtons = document.getElementsByClassName('cancel-button')
console.log(cancelButtons);

// cancelButtons.forEach(button => {
//     console.log(button);
//     button.addEvenListener('click', () => {
//         const appt = button.closest('tr')
//         console.log(appt);
//         deleteAppt(appt);
//     })
// })

function deleteAppt(appt) {
    var appointments = JSON.parse(localStorage.getItem("appts"));
    var id = appt.id;
    // console.log("id", id);

    if (appointments.length == 1) {
        localStorage.clear()
    } else {
        appointments = appointments.splice(1, id);
        console.log(appointments);
        localStorage.setItem("appts", JSON.stringify(appointments));
    }
    
    // localStorage.clear();
    console.log(JSON.parse(localStorage.getItem("appts")))
    window.location.reload();
}