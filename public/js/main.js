// For selecting appointment page
function appointment_selection_alert() {
    alert('Selected');
    return false;
}

// Functions for updating page when selecting appt details
function update_chosen_appt_date() {
    var selectedDate = document.querySelector('input[name="appt-date"]:checked');
    // const dateInfo = selectedDate.value.split(" ");
    document.getElementById("appt-date").innerHTML = selectedDate.value;
    // console.log("date", dateInfo)
}

function update_chosen_appt_time() {
    var selectedTime = document.querySelector('input[name="appt-time"]:checked');  
    document.getElementById("appt-time").innerHTML = selectedTime.value;
    // console.log("time")
}
