const inputEl = document.querySelector("input");

inputEl.addEventListener("invalid", e => {
    e.preventDefault();
})