var rname = document.querySelector("#rname");
var remail = document.querySelector("#remail");
var rphone = document.querySelector("#rphone");
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const step = document.querySelector(".btn");


function isEmpty(fname, email, phone) {
    if(fname === "") {
        rname.style.display = "block";
    }
    if(email === "") {
        remail.style.display = "block";
    }
    if(phone === "") {
        rphone.style.display = "block";
    }
}

function nextStep() {
    isEmpty(fname.value, email.value, phone.value);
}