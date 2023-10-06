let selected = "";
const buttons = document.querySelectorAll(".rate button");
const first = document.querySelector(".first");
const thanks = document.querySelector(".thanks");
const rated = document.getElementById("rated");
const err = document.getElementById("error");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSeleted();
        selected = e.target.textContent;
        e.target.classList.add("selected");
    })
})

function removeSeleted() {
    buttons.forEach(btn => {
        btn.classList.remove("selected")
    })
}

function submit() {
    if (selected === "") {
        console.log("Value is empty");
    } else {
        rated.textContent = `You selected ${selected} out of 5`;
        first.classList.add("hide");
        thanks.classList.remove("hide")
    }
}