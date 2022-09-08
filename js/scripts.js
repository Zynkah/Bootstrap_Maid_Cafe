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
const el = document.getElementById('carouselButton');
el.addEventListener('mouseover', makeWhite);
el.addEventListener('mouseout', makePink);
function makeWhite() {
    el.style.background = 'linen';
}
function makePink() {
    el.style.background = 'palevioletred';
}
