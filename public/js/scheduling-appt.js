// Javascript for scheduling appt

// Saving the appointment type into local storage


// Select confirm button
const confirmButton = document.querySelector("#confirm-button");
console.log(confirmButton);

// Save appt type after the confirm button is pressed
confirmButton.onclick = event => {
    event.preventDefault()
    if (document.querySelector('input[name="appt-type"]') !== null) {
        try {
            var inputApptType = document.querySelector('input[name="appt-type"]:checked').value;
            localStorage.setItem("apptType", JSON.stringify(inputApptType));
            var help = JSON.parse(localStorage.getItem("apptType"));
            console.log(help);

            // Redirect to another page
            window.location.href = "appt-time.html";
        } catch (err) {
            alert (new Error('You must select one appointment type'));
        }
    } else if (document.querySelector('input[name="appt-date"]') !== null) {
        try {
            console.log("here");
        } catch (err) {
            console.log("here error");
        }
    } else if (document.querySelector('input[name="appt-time"]') !== null) {
        try {
            console.log("here2");
        } catch (err) {
            console.log("here2 error");
        }
    }
}




// JSON.parse(localStorage.getItem("savedAnimal"));
// localStorage.setItem("savedAnimal", JSON.stringify(animal));

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })