document.addEventListener("DOMContentLoaded", function(){

    let logout = document.getElementById("logout")

    logout.addEventListener("click", (e) => {
        localStorage.removeItem("userStatus")
        window.location.href = "login.html"
    })

    if (!localStorage.getItem("userStatus")) {
        window.location.href = "login.html"
    }

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});