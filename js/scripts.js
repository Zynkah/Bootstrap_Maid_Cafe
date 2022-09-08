$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

// Change the carousel play/pause button color 
const play = document.getElementById('carouselButton');
play.addEventListener('mouseover', makeWhite);
play.addEventListener('mouseout', makePink);
function makeWhite() {
    play.style.background = 'linen';
}
function makePink() {
    play.style.background = 'palevioletred';
}

// Make nav-bar logo image fade when hover over
const logo = document.getElementById('logo');
logo.addEventListener('mouseover', makeFade);
logo.addEventListener('mouseout', makeUnfade);
function makeFade() {
    logo.style.opacity = '0.5';
}
function makeUnfade() {
    logo.style.opacity = '1';
}