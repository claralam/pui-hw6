// For selecting appointment page
function appointment_selection_alert() {
    alert('Selected');
    return false;
}

// Functions for updating page when selecting appt details
function update_chosen_appt_date() {
    try {
        var selectedDate = document.querySelector('input[name="appt-date"]:checked');
        // const dateInfo = selectedDate.value.split(" ");
        document.getElementById("appt-date").innerHTML = selectedDate.value;
        // console.log("date", dateInfo)
    } catch (err) {
        alert (new Error('You must select one appointment date'));
    }
}

function update_chosen_appt_time() {
    try {
        var selectedTime = document.querySelector('input[name="appt-time"]:checked'); 
        console.log(selectedTime)
        document.getElementById("appt-time").innerHTML = selectedTime.value;
        // console.log("time")
    } catch (err) {
        alert (new Error('You must select one appointment time'));
    }
}
