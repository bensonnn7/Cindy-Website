
$(document).ready(function () {

    $(".burger-nav").on("click", function () {

        $(".navbar nav ul").toggleClass("open");

    });
});

//hide Nav bar when scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbarContainer").style.top = "0";
    } else {
        document.getElementById("navbarContainer").style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}

//button

