'use strict';

$('.hero-image-area').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    fade: true,
    infinite: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false
});

/*$(function(){

    // 開く
    $("#open_sanbonsen").on("click", function(){
        $("#nav").addClass("active");
        $("#marubatu").text("×");
    });

    // 閉じる
    $("#close_btn").on("click", function(){
        $("#nav").removeClass("active");
        $("#marubatu").text("≡");
    });

});*/

$(function () {

    $("#open_sanbonsen").on("click", function () {

        $("#nav").toggleClass("active");

        if ($("#nav").hasClass("active")) {
            $("#marubatu").text("×");
        } else {
            $("#marubatu").text("≡");
        }

    });

});

lightbox.option({
    resizeDuration: 300,
    wrapAround: true,
    fadeDuration: 300,
    imageFadeDuration: 300,
    disableScrolling: true
});