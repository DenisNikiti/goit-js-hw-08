import throttle from "lodash.throttle"
const formEl = document.querySelector(".feedback-form")
const formtTextareaEl = document.querySelector(".feedback-form textarea")
const formEmailEl = document.querySelector(".feedback-form input[type=email]")


const savedEmail = localStorage.getItem("feedback-form-state-email")
const savedmessage = localStorage.getItem("feedback-form-state-text")

if (savedEmail && savedmessage) {
    formtTextareaEl.value = savedmessage
    formEmailEl.value = savedEmail
}


formEl.addEventListener("submit", onFormsubmit)

function onFormsubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state-email")
    localStorage.removeItem("feedback-form-state-text")

}

formEmailEl.addEventListener("input", throttle(onformEmailEl,500 ))


function onformEmailEl(evt) {

    localStorage.setItem("feedback-form-state-email",evt.currentTarget.value)
}


formtTextareaEl.addEventListener("input", throttle(onForminput,500))

function onForminput(event) {
    
    localStorage.setItem("feedback-form-state-text",event.currentTarget.value)
}