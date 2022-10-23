import throttle from "lodash.throttle"
const formEl = document.querySelector(".feedback-form")
const formtTextareaEl = document.querySelector(".feedback-form textarea")
const formEmailEl = document.querySelector(".feedback-form input[type=email]")


const savedEmailText =  JSON.parse(localStorage.getItem("feedback-form-state"))            

  console.log(savedEmailText)
if (savedEmailText) {
    formtTextareaEl.value = savedEmailText.message
    formEmailEl.value = savedEmailText.email


}


formEl.addEventListener("submit", onFormsubmit)

function onFormsubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state-email")
    localStorage.removeItem("feedback-form-state-text")

}

formEl.addEventListener("input", throttle(onForminput,500 ))


function onForminput(evt) {

    
    
    
   
    localStorage.setItem("feedback-form-state",  JSON.stringify({
           email: formEmailEl.value,
           message: formtTextareaEl.value,
    }))
    
    
}





