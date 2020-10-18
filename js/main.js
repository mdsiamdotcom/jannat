$(document).ready(function(){
    $header = $("header");
    $sticky = $header.before($header.clone().addClass("sticky")); 

    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop>60));
    });
    
//javascript start  for loader
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden"; // class "loader hidden"
//javascript end for loader
    });
});