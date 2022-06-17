import navBurger from "./nav.js"

navBurger()

const modal = document.querySelector('#modal')
const openModalBtnGS = document.querySelector('#open-modal-btn-get-started')
const closeModalBtnGS = document.querySelector('#close-modal-btn')

const form = document.querySelector('#form')
const createAccountBtn = document.querySelector('#create-account-btn')

const userInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#password-confirmation')
const termsInput = document.querySelector('#terms')

const errorsContainer = document.querySelector('.errors')
const errorsList = document.querySelector('.errors-list')

// ----------------------------------------------------------------------------

openModalBtnGS.addEventListener ('click', e => {
    modal.classList.add('open')
})

closeModalBtnGS.addEventListener ('click', e => {
    modal.classList.remove('open')
})

// ----------------------------------------------------------------------------

form.addEventListener('submit', e => {

    const errorReports = []
    clearErrors()

    if (userInput.value.length < 8) {
        errorReports.push("Username must be at least 8 characters long")
    }
    if (passwordInput.value.length < 10) {
        errorReports.push("Password Must be at least 10 characters long")
    } 
    if (passwordInput.value !== passwordConfirmInput.value) {
        errorReports.push("Passwords must match")
    }
    if (!termsInput.checked) {
        errorReports.push("You must agree to the terms by checking the box")
    }
    if (errorReports.length > 0) {
        showErrors(errorReports)
        e.preventDefault()
    }
})

function clearErrors () {
    while (errorsList.children[0] != null) {
        errorsList.removeChild(errorsList.children[0])
    }
    errorsContainer.classList.remove("show")
}

function showErrors(errorReports) {
    errorReports.forEach(errorReport => {
        const li = document.createElement("li")
        li.innerText = errorReport

        errorsList.appendChild(li)
    })

    errorsContainer.classList.add("show")
}
