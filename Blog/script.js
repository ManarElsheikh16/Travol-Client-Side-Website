// header
$(".navTrigger").click(function () {
    $(this).toggleClass("active");
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});


// btnUp


let demoOffsite=$("#content2").offset().top;
$(window).scroll(function () {
    // $(window).scrollTop(function(){
    let wScroll = $(window).scrollTop();//nzl ad ea
   


    if (wScroll > demoOffsite/2 ) {
      
        //   $("").css("","");
        // $("#btnUpContent").addClass("navContainer")

        $("#btnUp").fadeIn(500);
    }

    else {
        $("#btnUp").fadeOut(500);
    }

})
$("#btnUp").click(function () {
    $(window).scrollTop(0);
    // $("body,html").animate({ scrollTop:0 },4000)

})


$(document).ready(function () {

    let conDiv = $(".item");
    let Div = $(".con ");


    /*conDiv.mouseenter(function (e) {
        // console.log(e.target)
     let a=  $(e.target).attr("src")
        console.log(a)
      Div.animate({ top: `10px` }, 500);

        // $(".item").
    });


    conDiv.mouseleave(function () {

        Div.animate({ top: `90px` }, 500);

    });
*/


})
