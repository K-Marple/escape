const cancelBtn = document.querySelector("#cancel-btn");
const att = document.querySelector("#attempts");
var count = 3;

const codeInput = document.querySelector("#code");
const code = "14IFW800R127985";

function reduceAttempts() {
    if (count >= 1) {
        if (codeInput.value == code) {
            document.getElementById("cancel-code").action = "success.html";
        } else {
            count -= 1;
            att.innerHTML = count;
        }
    }
}

cancelBtn.addEventListener("click", () => {
    reduceAttempts();
    if (count < 1) {
        document.getElementById("cancel-code").action = "fail.html";
    }
});