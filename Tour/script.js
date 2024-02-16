
////////////////////////////////
$(document).ready(function () {


    $(".star").mouseenter(function () {
        $(this).prevAll("i").css("color", "yellow")
        $(this).css("color", "yellow")
    });

    $(".star").mouseleave(function () {
        $(this).css("color", "white")
    });

    $(".star").click(function () {
        $(this).toggleClass("active");

    });
    $(".card").mouseenter(function () {

        $(this).children().first().css({
            "transform": "scale(1.1, 1.1)",
            "filter": "brightness(70%)",
            "transition": "0.5s ease-in-out"

        });

        $(".hr-basic").css({

            "width": "89%",
            "transition": " 0.5s ease-in-out"

        })
        $(".island-1").css({
          "margin-top": "49%",
          "transition": " 0.5s ease-in-out"
        });
        $(".island-2").css({
            "margin-top": "98%",
            "transition": " 0.5s ease-in-out"
          });
        
        $(".island-3").css({
            "margin-top": "37%",
            "transition": " 0.5s ease-in-out"
          });
        
       

    }).mouseleave(function () {
        $(this).children().first().css({
            "transform": "scale(1, 1)",
            "filter": "brightness(100%)",
            "transition": "transform 0.5s ease-in-out"

        });
        $(".hr-basic").css({

            "width": "20%",
            "transition": " 0.5s ease-in-out"

        })
        $(".island-1 ").css({
            "margin-top": "56%",
            "transition": " 0.5s ease-in-out"
          });
          $(".island-2").css({
            "margin-top": "114%",
            "transition": " 0.5s ease-in-out"
          });
           
        $(".island-3").css({
            "margin-top": "52%",
            "transition": " 0.5s ease-in-out"
          });

    });



let des =$("#caption").offset().top;     
$(window).scroll(function(){
     var scrtop =$(window).scrollTop(); 
     if(scrtop > des -200)
     {
          $("header").css({'position':'fixed','background-color':'gray'});
          $("#btnUp").fadeIn(500);
     }
     else
     {
          $("header").css({'position':'absolute','background-color':'transparent'});
          $("#btnUp").fadeOut(500);   
     }
})
$("#btnUp").click(function(){
    $(window).scrollTop(0);
     //$("body,html").animate({scrollTop:0},500);
})

});