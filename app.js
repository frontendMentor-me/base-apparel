const form = document.querySelector(".form")
const response = document.querySelector("#message")
const email = document.querySelector("#email")
const iconError = document.querySelector(".iconError")



form.addEventListener("submit", (e) => {
    e.preventDefault()
    email.classList.remove("error")
    email.classList.remove("success")
    iconError.classList.remove("show")
    if (email.value.includes('@')) {
        email.classList.remove("error")
        email.classList.add("success")
        iconError.classList.remove("show")
        response.innerHTML = "<span style='color:green;'>Email sent successfully</span>";
    } else {
        response.innerHTML = "<span style='color:red;'>Please provide a valid email</span>";
        iconError.classList.add("show")
        email.classList.remove("success")
        email.classList.add("error")
    }

})