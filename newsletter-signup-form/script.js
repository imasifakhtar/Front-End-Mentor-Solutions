const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const email = document.querySelector("#email");
const errMsg = document.querySelector("#error-msg");
const submitEmail = document.querySelector("#subMail");
const dismiss = document.querySelector("#dismiss")

function isValid(str) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  console.log("isValid")
  return reg.test(str);
}

function successShow() {
    card_1.classList.toggle("hide");
    card_2.classList.toggle("hide");
}

function updateEmail(email) {
    submitEmail.textContent = email;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = isValid(email.value);

  if(!valid) {
    email.classList.add("error-shade");
    errMsg.classList.remove("hide");
  }

  if (valid) {
    successShow();
    updateEmail(email.value);
  }
});

dismiss.addEventListener("click", () => {
    successShow();
    updateEmail = "";
})