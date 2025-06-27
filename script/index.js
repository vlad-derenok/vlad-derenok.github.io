let range = document.getElementById('range');
let output = document.getElementById('value');

range.oninput = () => {
    output.textContent = range.value + "%";
}

document.addEventListener("DOMContentLoaded", function () {
    const select = document.querySelector(".form__select");
    const selected = select.querySelector(".form__select-selected");
    const options = select.querySelector(".form__select-options");
    const optionItems = select.querySelectorAll(".form__select-option");
    const hiddenInput = document.querySelector(".form__select-hidden");
    const placeholder = select.dataset.placeholder;

    selected.addEventListener("click", () => {
        options.style.display = options.style.display === "block" ? "none" : "block";
    });

    optionItems.forEach((option) => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent;
            hiddenInput.value = option.textContent;
            options.style.display = "none";
        });
    });

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            options.style.display = "none";
        }
    });

    selected.textContent = placeholder;
});

document.querySelector('.header__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})