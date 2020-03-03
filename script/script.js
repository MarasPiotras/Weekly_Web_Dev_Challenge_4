//search input visible after icon click
document.querySelector(".fa-search").addEventListener("click", function () {
    document.querySelector("#site-search").classList.toggle('active-search');
});

//hamburger menu visible after icon click
document.querySelector(".fa-bars").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.toggle('active');
});

//hamburger menu contact section visible after click
document.querySelector("#contact-button").addEventListener("click", function () {
    document.querySelector(".hamburger-menu>div").classList.toggle('active');
    document.querySelector(".contact-data").classList.toggle('active');
});