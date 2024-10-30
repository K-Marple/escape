const inputEl = document.querySelector("input");
const uInput = document.getElementById("username");
const pInput = document.getElementById("password");
const ucInput = document.querySelector(".user");
const pcInput = document.querySelector(".pass");

inputEl.addEventListener("invalid", e => {
    e.preventDefault();
})

uInput.addEventListener("invalid", e => {
    e.preventDefault();
})

pInput.addEventListener("invalid", e => {
    e.preventDefault();
})

ucInput.addEventListener("invalid", e => {
    e.preventDefault();
})

pcInput.addEventListener("invalid", e => {
    e.preventDefault();
})