$(document).ready(function(){
    $header = $("header");
    $sticky = $header.before($header.clone().addClass("sticky")); 

    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop>60));
    });


});