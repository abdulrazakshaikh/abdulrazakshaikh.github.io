jQuery(document).ready(function() {
    abdul_tm_cursor();
});

$(window).load('body', function() {
    abdul_tm_my_load();
});

function abdul_tm_my_load() {
    "use strict";
    var speed = 500;
    setTimeout(function() {
        abdul_tm_preloader();
    }, speed);
    setTimeout(function() {
        jQuery('body').addClass('loaded');
    }, speed + 2000);
    // setTimeout(function(){
    //   $('.loader-wrap').addClass('is-hidden');
    // }, speed + 1000);
    // setTimeout(function() {
    //     jQuery('.spinner-border').remove();
    // }, speed + 1000);
    // setTimeout(function() {
    //     jQuery('.shane_tm_down').addClass('loaded');
    // }, speed + 2000);
    // setTimeout(function() {
    //     jQuery('.shane_tm_topbar').addClass('loaded');
    // }, speed + 4200);
}
function abdul_tm_preloader() {
    "use strict";
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');
    if (!isMobile) {
        setTimeout(function() {
            preloader.addClass('preloaded');
        }, 800);
        setTimeout(function() {
            preloader.remove();
        }, 2000);
    } else {
        preloader.remove();
    }
}
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
// $('.introcontainer').fsScroll({
//     selectors: {
//       sections: '.introwrap',
//       section: '.introitem',
//       page:'.page',
//       active:'.active'
//     },
//     keyboard: true,
//     loop: true,
//     pagination: true,
    
//     // beforeScroll: function(el, index) {
//     //   el.find('h1').addClass('text-animate');
//     // },

//     // afterScroll: function(el, index) {
//     //   el.find('h1').removeClass('text-animate');
//     // }
// });
$(document).ready(function() {
var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      parallax: true,
      lazy: true,
      grabCursor: true,
      mousewheel: true,
      loop: true,
      watchSlidesProgress: true,
      paginationClickable: true,
      autoplay: {
        delay: 5000,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});

$("#about-tab, #work-tab, #contact-tab").click(function(){
    $(".content-area").css("overflow-x", "hidden");
});
$("#home-tab").click(function(){
    $(".content-area").css("overflow-x", "visible");
});



function abdul_tm_cursor() {
    "use strict";
    var myCursor = jQuery('.mouse-cursor');
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner")
              , t = document.querySelector(".cursor-outer");
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)",
                n = s.clientY,
                i = s.clientX
            }
            ,
            $("body").on("mouseenter", "a, .cursor-pointer", function() {
                e.classList.add("cursor-hover"),
                t.classList.add("cursor-hover")
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function() {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"))
            }),
            e.style.visibility = "visible",
            t.style.visibility = "visible"
        }
    }
}