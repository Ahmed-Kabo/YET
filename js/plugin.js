/*global console,$,window,setInterval*/
$(function(){
   'use strict' ;
    /*
    $("header").height($(window).height());
    */
    $('.main-lang').click(function(){
       $('.drop-lang').slideToggle(200); 
    });
    
    $(".menu").click(function(){
       $(".dropdowm-menu").slideToggle(300);
    });
    /****** start navbar *******/
    $('nav .links li').on("click",function(){
       $(this).addClass('active').siblings("li").removeClass('active'); 
    });
    
    $(".icon").on("click", function(){
       $(".search-box").toggleClass("active"); 
    });
    
    $(".mobile-nav").on("click",function(){
       $(this).toggleClass('transfer');
        if($(".mobile-nav").hasClass("transfer"))
            {
                $('.search-and-nav').animate({
                   left:0,
                });
            }
        else
            {
                $('.search-and-nav').animate({
                   left:"-80%",
                });
            }
    });
    

    /* start slidshow with js */
   /*
    $("slideshow-container .mySlides").each(function() {
        var mySlide = $("slideshow-container .mySlides");
        if(mySlide.hasClass("active"))
            {
                $(this).delay(2000).fadeOut(500,function(){
                    $(this).removeClass("active").next(".mySlides").addClass("active")
                })
            }
    });
   */
    /*
    (function slidShow(){
        $(".mySlides .active").each(function(){
            if(!$(this).is("last:child")){
                $(this).delay(2000).fadeOut(500,function(){
                    $(this).removeClass("active").next().addClass("active").removeClass("hidden");
                })
            }
        });
    });
    */

    $(".slideshow-container > .mySlides:eq(0)").hide();
    
    setInterval (function(){
        $(".mySlides:first").fadeIn(2000)
        .next().fadeOut(2000).end().appendTo(".slideshow-container");
    } ,2000)
    
   // start scroll to next features
    
    $(".scroll").on("click", function () {
       $("body,html").animate({
           scrollTop : $(".featuers").offset().top,
       }) 
    });
    
     $(window).scroll(function(){
         var myScroll = $(window).scrollTop();
         if(myScroll > 400)
             {
                $(".img-content img").fadeIn(600); 
                 $(".featuers .info").animate({
                     left:0,
                 },500)
             }

     });
    /*---- start hotel slide ----*/
    var leftScroll  = $(".fa-angle-left"),
        rightScroll = $(".fa-angle-right");
    
    function slidhotel(){
        if($(".content-hotel:first").hasClass("active"))
        {
            leftScroll.fadeOut()
        }else{
            leftScroll.fadeIn()
        }
        if($(".content-hotel:last").hasClass("active"))
        {
            rightScroll.fadeOut()
        }else{
            rightScroll.fadeIn()
        }

        $(".hotels i").on("click",function(){
           if($(this).hasClass("fa-angle-right")) 
               {
                   $(".hotels .active").fadeOut(300 , function(){
                      $(this).removeClass("active").next(".content-hotel").addClass("active").fadeIn(300); 
                       slidhotel();
                   });
               }else{
                   $(".hotels .active").fadeOut(300 , function(){
                      $(this).removeClass("active").prev(".content-hotel").addClass("active").fadeIn(300); 
                       slidhotel();
                   });   
               }

        });
    }
    slidhotel();
    /*---- e n d hotel slide ----*/
    
    $(".video-detiels .play-icon").click( function () {
        $(".video-detiels iframe").addClass("video-show");
        $(".video-detiels .exit").fadeIn();
    });
    $(".video-detiels .exit").click(function (){
        $(".video-detiels iframe").removeClass("video-show");
        $(this).fadeOut();
        $(".video-detiels iframe").attr("src","https://www.youtube.com/embed/mfxQy5A_tHs?controls=0");
    });

    
    
});