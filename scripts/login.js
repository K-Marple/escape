const cancel = document.querySelector("#cancel");
const check = document.querySelector("#status");
const cancelpopup = document.querySelector(".cancel-form-pop");
const checkpopup = document.querySelector(".check-form-pop");

cancel.addEventListener("click", () => {
    cancelpopup.style.display = "block";
})

check.addEventListener("click", () => {
    checkpopup.style.display = "block";
})