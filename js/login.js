const form = document.getElementById("login-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {email: email, password: password}

    localStorage.setItem("user", JSON.stringify(user))

    if (!email || !password) {
        return alert("Por favor, rellene todos los campos")
    } else {
        localStorage.setItem("userStatus", true)
        window.location.href = "index.html"
    }
})