function validateForm() {
    let name = document.getElementById("name").value;
    if (name == "" || name == null) {
        alert("Name must be filled out");
        document.form.name.focus();
        return false;
    }
    let email = document.getElementById("email").value;
    if (email == "" || email == null) {
        alert("Email must be filled out");
        document.form.email.focus();
        return false;
    }

    let phone = document.getElementById("phone").value;
    if (phone == "" || phone == null) {
        alert("Phone must be filled out");
        document.form.phone.focus();
        return false;
    }

    let state = document.getElementById("state").value;
    if (state == "" || state == null) {
        alert("State must be filled out");
        document.form.email.focus();
        return false;
    }
}
let darkmode = document.getElementsByClassName("button");
let bgImg = document.getElementsByClassName("main");
let header = document.getElementsByClassName("header_section");
let brand = document.getElementsByClassName("navbar_brand");
let form = document.getElementsByClassName("form");
let button = document.getElementsByClassName("darkmode");
let Switch = true;
function colorMode() {
    if (Switch) {
        for (let e of bgImg) e.classList.add("entryDarkmode");
        for (let e of header) e.classList.add("headerdarkmode");
        for (let e of brand) e.classList.add("navbardarkmode");
        for (let e of button) e.classList.add("buttonDarkmode");
    } 
    else {
        for (let e of bgImg) e.classList.remove("entryDarkmode");
        for (let e of header) e.classList.remove("headerdarkmode");
        for (let e of brand) e.classList.remove("navbardarkmode");
        for (let e of button) e.classList.remove("buttonDarkmode");
    }
    Switch = !Switch;
}

for (let e of button) e.addEventListener("click", colorMode);
document.getElementById("button").addEventListener("click", validateForm);