const cancelBtn = document.querySelector("#cancel-btn");
const att = document.querySelector("#attempts");
var count = 3;

const codeInput = document.querySelector("#code");
const code = "14IFW800RJ127B5";

function uppercase() {
    codeInput.value = codeInput.value.toUpperCase();
    console.log(codeInput.value);
}

const form = document.getElementById("cancel-code");

function reduceAttempts() {
    if (count >= 1) {
        if (codeInput.value == code) {
            form.action = "success.html";
        } else {
            count -= 1;
            att.innerHTML = count;
        }
    }
}

function failure() {
    if (count < 1) {
        form.action = "fail.html";
    }
}

cancelBtn.addEventListener("click", () => {
    reduceAttempts();
    failure();
});