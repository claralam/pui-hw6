// Javascript for scheduling appt

// Loading page for selecting appt-time
function onLoadTimePage() {
    var apptType = JSON.parse(localStorage.getItem("apptType"));
    var apptTypeTag = document.getElementById("appt-type");
    apptTypeTag.innerHTML = apptType

    var apptDate = JSON.parse(localStorage.getItem("apptDate"));
    var apptTime = JSON.parse(localStorage.getItem("apptTime"));

    if (apptDate !== null && apptTime !== null) {
        var apptDateTag = document.getElementById("appt-date");
        var apptTimeTag = document.getElementById("appt-time");
        
        apptDateTag.innerHTML = apptDate;
        apptTimeTag.innerHTML = apptTime;

        // Re-populating radio button selections if pressed back button
        var selectedDate = document.querySelectorAll(`input[value="${apptDate}"]`)[0];
        // console.log(selectedDate);
        selectedDate.checked = "checked";

        var selectedTime = document.querySelectorAll(`input[value="${apptTime}"]`)[0];
        // console.log(selectedDate);
        selectedTime.checked = "checked";
    }
}

// Saving the appointment type into local storage

// Select confirm button
const confirmButton = document.querySelector("#confirm-button");
// console.log(confirmButton);

// Save appt type after the confirm button is pressed
confirmButton.onclick = event => {
    event.preventDefault() // preventing the default action

    // If the appt type is not chosen before the confirm button is clicked
    if (document.querySelector('input[name="appt-type"]') !== null) {
        try {
            var inputApptType = document.querySelector('input[name="appt-type"]:checked').value;
            localStorage.setItem("apptType", JSON.stringify(inputApptType));
            // var help = JSON.parse(localStorage.getItem("apptType"));
            // console.log(help);

            // Redirect to another page
            window.location.href = "appt-time.html";
        } catch (err) {
            alert (new Error('You must select one appointment type'));
            return;
        }
    } 
    
    // If the appt date is not chosen before the confirm button is clicked
    if (document.querySelector('input[name="appt-date"]') !== null) {
        try {
            var inputApptDate = document.querySelector('input[name="appt-date"]:checked').value;
            localStorage.setItem("apptDate", JSON.stringify(inputApptDate));
            // var help = JSON.parse(localStorage.getItem("apptDate"));
            // console.log(help);
        } catch (err) {
            alert (new Error('You must select one appointment date'));
            return;
        }
    } 
    
    // If the appt time is not chosen before the confirm button is clicked
    if (document.querySelector('input[name="appt-time"]') !== null) {
        try {
            // console.log("here2")
            var inputApptTime = document.querySelector('input[name="appt-time"]:checked').value;
            localStorage.setItem("apptTime", JSON.stringify(inputApptTime));
            // var help = JSON.parse(localStorage.getItem("apptTime"));
            // console.log(help);

            // console.log("here2");
        } catch (err) {
            alert (new Error('You must select one appointment time'));
            return;
        }
    }

    // If both appt date and time are chosen, go to next page
    if (document.querySelector('input[name="appt-date"]') !== null && document.querySelector('input[name="appt-time"]') !== null) {
        window.location.href = "confirm-appt.html";
    }
}


// Updates the selected date and time in real time
function update_appt_info() {
    if (document.querySelector('input[name="appt-date"]:checked') !== null) {
        update_chosen_appt_date();
    } 
    if (document.querySelector('input[name="appt-time"]:checked') !== null) {
        update_chosen_appt_time();
    }
}

// Functions for updating page when selecting appt date
function update_chosen_appt_date() {
    var selectedDate = document.querySelector('input[name="appt-date"]:checked');
    // const dateInfo = selectedDate.value.split(" ");
    document.getElementById("appt-date").innerHTML = selectedDate.value;
    // console.log("date", dateInfo)
}

// Function for updating page when selecting appt time
function update_chosen_appt_time() {
    var selectedTime = document.querySelector('input[name="appt-time"]:checked'); 
    console.log(selectedTime.value);
    var time = selectedTime.value;
    document.getElementById("appt-time").innerHTML = time; //selectedTime.value;
    // console.log("time")
}
