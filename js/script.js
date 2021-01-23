

// on click navmenu close
$(document).ready(function() {
    $(".main-nav .nav-item .nav-link").click(function(e) {
        $(".navbar-collapse").collapse('hide')
    })
});  


$(".nav-tabs .nav-link").click(function(){
    if ( $("#home-tab").hasClass("active") ) {
      $('.carousel-nav').show();
    }else{
      $('.carousel-nav').hide();
    }
});


// tooltip
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
});


// Skills TagCloud Canvas
$(document).ready(function() {
    if (!$('#myCanvas').tagcanvas({
            textColour: '#1c1d1f',
            textFont: "Josefin Sans",
            textHeight: 24,
            outlineColour: 'transparent',
            maxSpeed : 0.06,
            freezeActive:false,
            shuffleTags:true,
            shape:'sphere',
            zoom:0.9,
            wheelZoom: false,
            noSelect:false,
            pinchZoom:true,
            freezeDecel:true,
            fadeIn:1000,
            initial: [0.3,-0.1],
            depth : 0.8
        }, 'tags')) {
        // something went wrong, hide the canvas container
        $('#myCanvasContainer').hide();
    }
});

// Intro Carousel
$('.introcontainer').fsScroll({
    selectors: {
      sections: '.introwrap',
      section: '.introitem',
      page:'.page',
      active:'.active'
    },
    keyboard: true,
    loop: true,
    pagination: true,
    
    // beforeScroll: function(el, index) {
    //   el.find('h1').addClass('text-animate');
    // },

    // afterScroll: function(el, index) {
    //   el.find('h1').removeClass('text-animate');
    // }
});

// $('#home-tab').click(function(e) {
//     e.preventDefault();
//     if ($(window).width() < 767)
//     { $('.carousel-nav').hide(); }
// });

// ScrollBar
// $(".nav-tabs .nav-link").click(function(){
//     $(".left-area").niceScroll({
//         cursorcolor:"#4c43ff",
//         cursorwidth:"5px",
//         cursorborder:"0px solid #000",
//         scrollspeed:60,
//         autohidemode:true,
//         // background:'#383737',
//         horizrailenabled:false,
//         touchbehavior:true,
//         smoothscroll:true
//     });
// });


// $("#about-tab, #work-tab, #contact-tab").click(function(){
//     $('.left-area').addClass('scroll');
//     $("body").css("overflow-y", "auto");
// });


$("#about-tab, #work-tab, #contact-tab").click(function(){
    $(".content-area").css("overflow-x", "hidden");
});
$("#home-tab").click(function(){
    $(".content-area").css("overflow-x", "visible");
});


// $("#about-tab, #work-tab, #contact-tab").click(function(){
//     $('.content-area').addClass('scroll');
// });
// $("#home-tab").click(function(){
//     $('.content-area').removeClass('scroll');
//     $(".content-area").css("overflow", "hidden");
// });


