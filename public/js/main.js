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

// For modals, opening popups
// Source: https://www.youtube.com/watch?v=MBaw_6cPmAw&ab_channel=WebDevSimplified
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}