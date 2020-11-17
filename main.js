let btn_ham = document.querySelector("#btn_hamburger");
let btn_close = document.querySelector("#btn_close");
let nav = document.querySelector("#nav");

btn_ham.addEventListener("click", function() {
    btn_ham.style.display = "none";
    btn_close.style.display = "block";
    nav.style.display = "block";
});

btn_close.addEventListener("click", function() {
    btn_close.style.display = "none";
    btn_ham.style.display = "block";
    nav.style.display = "none";
});