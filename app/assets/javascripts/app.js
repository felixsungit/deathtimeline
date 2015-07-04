
// $(document).on('page:load', function() {

// var s_1_height = $(".season1").outerHeight() + 14;
// var s_2_height = $(".season2").outerHeight() + 14;
// var s_3_height = $(".season3").outerHeight() + 14;
// var s_4_height = $(".season4").outerHeight() + 14;
// var s_5_height = $(".season5").outerHeight() + 14;

var s_1_height = $("#asc").children(".season1").outerHeight();
var s_2_height = $("#asc").children(".season2").outerHeight();
var s_3_height = $("#asc").children(".season3").outerHeight();
var s_4_height = $("#asc").children(".season4").outerHeight();
var s_5_height = $("#asc").children(".season5").outerHeight();
var a_or_d = true;

console.log(s_1_height);
console.log(s_2_height);
console.log(s_3_height);
console.log(s_4_height);
console.log(s_5_height);

$( window ).resize(function() {
  if (a_or_d == true){
    s_1_height = $("#asc").children(".season1").outerHeight();
    s_2_height = $("#asc").children(".season2").outerHeight();
    s_3_height = $("#asc").children(".season3").outerHeight();
    s_4_height = $("#asc").children(".season4").outerHeight();
    s_5_height = $("#asc").children(".season5").outerHeight();
  }else{
    s_1_height = $("#desc").children(".season5").outerHeight();
    s_2_height = $("#desc").children(".season4").outerHeight();
    s_3_height = $("#desc").children(".season3").outerHeight();
    s_4_height = $("#desc").children(".season2").outerHeight();
    s_5_height = $("#desc").children(".season1").outerHeight();
  }
});

$(".state2").hide();
$(".info").hide();
$("#asc").show();
$("#desc").hide();
$(".down_arrow").click(function(event)
{
    event.preventDefault();
    $(this).parent().siblings('.info').slideToggle(500);
    $(this).parent().siblings('.info').css("display","inline-block");

    $(this).parent().siblings('.time').toggleClass("dark");
    // s_1_height = $(".season1").height() + 80;
    console.log( $(".season1").height() );
    $(this).toggleClass("rotate");
    
    
    if (a_or_d == true ){
      setTimeout(function(){ 
          s_1_height = $("#asc").children(".season1").outerHeight();
          s_2_height = $("#asc").children(".season2").outerHeight();
          s_3_height = $("#asc").children(".season3").outerHeight();
          s_4_height = $("#asc").children(".season4").outerHeight();
          s_5_height = $("#asc").children(".season5").outerHeight();
          console.log(s_1_height);
      }, 502); 
    }
    else{
       setTimeout(function(){ 
          s_1_height = $("#desc").children(".season5").outerHeight();
          s_2_height = $("#desc").children(".season4").outerHeight();
          s_3_height = $("#desc").children(".season3").outerHeight();
          s_4_height = $("#desc").children(".season2").outerHeight();
          s_5_height = $("#desc").children(".season1").outerHeight();
      }, 502); 
    }
    

});

$(".toggle_circle").click(function(event){
    window.scrollTo(0, 0);
    // event.preventDefault();
    $("#asc").slideToggle(600);
    $("#desc").slideToggle(600);

    setTimeout(function() {
      $(".direction_toggle").toggleClass("blue");
    }, 502);

    

    if (a_or_d == true){
      //animations
      $(".toggle_circle").animate({
          bottom: '-=49'
      }, 500);

      a_or_d = false;
      $(".state1").hide();
      setTimeout(function() {
        $(".state2").animate({
            bottom: '+=26'
        }, 0);

        $(".state2").show();
      }, 501);
      //logic

      s_1_height = $("#desc").children(".season5").outerHeight();
      s_2_height = $("#desc").children(".season4").outerHeight();
      s_3_height = $("#desc").children(".season3").outerHeight();
      s_4_height = $("#desc").children(".season2").outerHeight();
      s_5_height = $("#desc").children(".season1").outerHeight();
      console.log(s_1_height);
      console.log(s_2_height);
      console.log(s_3_height);
      console.log(s_4_height);
      console.log(s_5_height);


    }
    else{
      //animations
      $(".toggle_circle").animate({
          bottom: '+=49'
      }, 500);
      a_or_d = true;

      
      setTimeout(function() {
        $(".state1").show();
      }, 501);

      $(".state2").hide();
      $(".state2").animate({
          bottom: '-=26'
      }, 0); 

      // //logic
      s_1_height = $("#asc").children(".season1").outerHeight();
      s_2_height = $("#asc").children(".season2").outerHeight();
      s_3_height = $("#asc").children(".season3").outerHeight();
      s_4_height = $("#asc").children(".season4").outerHeight();
      s_5_height = $("#asc").children(".season5").outerHeight();

      console.log(s_1_height);
      console.log(s_2_height);
      console.log(s_3_height);
      console.log(s_4_height);
      console.log(s_5_height);
      
    }

});



$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < s_1_height){

      $(".one").css("background-color", "#9A1408")
      $(".two").css("background-color", "#bdc3c7")
      $(".three").css("background-color", "#bdc3c7")
      $(".four").css("background-color", "#bdc3c7")
      $(".five").css("background-color", "#bdc3c7")
    }
    else if (scroll >= s_1_height && scroll < s_1_height + s_2_height){
      $(".one").css("background-color", "#bdc3c7")
      $(".two").css("background-color", "#9A1408")
      $(".three").css("background-color", "#bdc3c7")
      $(".four").css("background-color", "#bdc3c7")
      $(".five").css("background-color", "#bdc3c7")

    }
    else if (scroll >= s_1_height + s_2_height && scroll < s_1_height + s_2_height + s_3_height){
      $(".one").css("background-color", "#bdc3c7")
      $(".two").css("background-color", "#bdc3c7")
      $(".three").css("background-color", "#9A1408")
      $(".four").css("background-color", "#bdc3c7")
      $(".five").css("background-color", "#bdc3c7")

    }
    else if (scroll >= s_1_height + s_2_height + s_3_height && scroll < s_1_height + s_2_height + s_3_height + s_4_height){
      $(".one").css("background-color", "#bdc3c7")
      $(".two").css("background-color", "#bdc3c7")
      $(".three").css("background-color", "#bdc3c7")
      $(".four").css("background-color", "#9A1408")
      $(".five").css("background-color", "#bdc3c7")

    }
    else{
      $(".one").css("background-color", "#bdc3c7")
      $(".two").css("background-color", "#bdc3c7")
      $(".three").css("background-color", "#bdc3c7")
      $(".four").css("background-color", "#bdc3c7")
      $(".five").css("background-color", "#9A1408")
    }
});


$(".one").click(function() {
  window.scrollTo(0, 0);
});
$(".two").click(function() {
  window.scrollTo(0, s_1_height);
  console.log(s_1_height);
});
$(".three").click(function() {
  window.scrollTo(0, s_1_height + s_2_height);
});
$(".four").click(function() {
  window.scrollTo(0, s_1_height + s_2_height + s_3_height );
});
$(".five").click(function() {
  window.scrollTo(0, s_1_height + s_2_height + s_3_height + s_4_height );
});

$("#up").click(function(){
  $("#spoiler").slideToggle(200);
});
$("#the_x").click(function(){
  $("#spoiler").slideToggle(200);
});

