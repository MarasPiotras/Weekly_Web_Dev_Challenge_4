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

//slideshow functions
//declare slide index for photos, declaring array with photos
let slideIndex = 1;
const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg']
let defaultDot = '#img' + (slideIndex + 1);
let timer = 5000
automatic()

//selecting active dot when document ready
// document.querySelector(defaultDot).classList.add('active')

//change slide index on dot click
document.querySelector("#img1").addEventListener("click", function () {
    slideIndex = 0
    changeImages()
});

document.querySelector("#img2").addEventListener("click", function () {
    slideIndex = 1
    changeImages()
});

document.querySelector("#img3").addEventListener("click", function () {
    slideIndex = 2
    changeImages()
});

//function for change images and dots
function changeImages() {
    if (slideIndex == 0) {
        document.querySelector("#img1").classList.add('active')
        document.querySelector("#img2").classList.remove('active')
        document.querySelector("#img3").classList.remove('active')
        document.querySelector(".slider").style.backgroundImage = "url('./img/" + images[slideIndex] + "')";
    } else if (slideIndex == 1) {
        document.querySelector("#img2").classList.add('active')
        document.querySelector("#img1").classList.remove('active')
        document.querySelector("#img3").classList.remove('active')
        document.querySelector(".slider").style.backgroundImage = "url('./img/" + images[slideIndex] + "')";
    } else {
        document.querySelector("#img3").classList.add('active')
        document.querySelector("#img1").classList.remove('active')
        document.querySelector("#img2").classList.remove('active')
        document.querySelector(".slider").style.backgroundImage = "url('./img/" + images[slideIndex] + "')";
    }
}

//change slide index on arrows click
document.querySelector(".forward").addEventListener("click", function () {
    if (slideIndex < 2) {
        slideIndex++
        changeImages()
    } else {
        slideIndex = 0
        changeImages()
    }
});

document.querySelector(".backword").addEventListener("click", function () {
    if (slideIndex > 0) {
        slideIndex--
        changeImages()
    } else {
        slideIndex = 2
        changeImages()
    }
});

function automatic() {
    if (slideIndex < 2) {
        slideIndex++
        changeImages()
    } else {
        slideIndex = 0
        changeImages()
    }
    setTimeout(automatic, timer)
}

//follow/unfollow function


//twitter
document.querySelector(".twitter>.fa-plus-circle").addEventListener("click", function () {
    document.querySelector(".twitter>.fa-plus-circle").classList.toggle("visible")
    document.querySelector(".twitter>.fa-check-circle").classList.toggle("visible")
})

document.querySelector(".twitter>.fa-check-circle").addEventListener("click", function () {
    document.querySelector(".twitter>.fa-plus-circle").classList.toggle("visible")
    document.querySelector(".twitter>.fa-check-circle").classList.toggle("visible")
})

//facebook
document.querySelector(".facebook>.fa-plus-circle").addEventListener("click", function () {
    document.querySelector(".facebook>.fa-plus-circle").classList.toggle("visible")
    document.querySelector(".facebook>.fa-check-circle").classList.toggle("visible")
})

document.querySelector(".facebook>.fa-check-circle").addEventListener("click", function () {
    document.querySelector(".facebook>.fa-plus-circle").classList.toggle("visible")
    document.querySelector(".facebook>.fa-check-circle").classList.toggle("visible")
})