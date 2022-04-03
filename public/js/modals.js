// For modals, opening popups
// Source: https://www.youtube.com/watch?v=MBaw_6cPmAw&ab_channel=WebDevSimplified
const openModalButtons = document.getElementsByClassName('popup-button')
console.log(openModalButtons)
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

console.log(typeof openModalButtons)

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

function openModal(modal, button) {
    console.log(modal)
    console.log(button)
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}