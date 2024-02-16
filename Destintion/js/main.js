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