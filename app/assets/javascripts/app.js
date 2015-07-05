
// $(document).on('page:load', function() {

// var s_1_height = $(".season1").outerHeight() + 14;
// var s_2_height = $(".season2").outerHeight() + 14;
// var s_3_height = $(".season3").outerHeight() + 14;
// var s_4_height = $(".season4").outerHeight() + 14;
// var s_5_height = $(".season5").outerHeight() + 14;

var spoiler_h = $("#spoiler").height() - 52;
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
console.log(spoiler_h);
console.log($(window).scrollTop());

function check_dot() {
  var scroll = $(window).scrollTop();
  if (scroll < spoiler_h){

    $(".dis").css("background-color", "#bdc3c7");
    $(".one").css("background-color", "transparent");
    $(".two").css("background-color", "transparent");
    $(".three").css("background-color", "transparent");
    $(".four").css("background-color", "transparent");
    $(".five").css("background-color", "transparent");
  }
  if (scroll >= spoiler_h && (scroll < s_1_height + spoiler_h) ){

    $(".dis").css("background-color", "transparent");
    $(".one").css("background-color", "#bdc3c7");
    $(".two").css("background-color", "transparent");
    $(".three").css("background-color", "transparent");
    $(".four").css("background-color", "transparent");
    $(".five").css("background-color", "transparent");
  }
  else if (scroll >= s_1_height + spoiler_h && scroll < s_1_height + s_2_height + spoiler_h){

    $(".dis").css("background-color", "transparent");
    $(".one").css("background-color", "transparent");
    $(".two").css("background-color", "#bdc3c7");
    $(".three").css("background-color", "transparent");
    $(".four").css("background-color", "transparent");
    $(".five").css("background-color", "transparent");

  }
  else if (scroll >= s_1_height + s_2_height + spoiler_h && scroll < s_1_height + s_2_height + s_3_height + spoiler_h){

    $(".dis").css("background-color", "transparent");
    $(".one").css("background-color", "transparent");
    $(".two").css("background-color", "transparent");
    $(".three").css("background-color", "#bdc3c7");
    $(".four").css("background-color", "transparent");
    $(".five").css("background-color", "transparent");

  }
  else if (scroll >= s_1_height + s_2_height + s_3_height + spoiler_h && scroll < s_1_height + s_2_height + s_3_height + s_4_height + spoiler_h){

    $(".dis").css("background-color", "transparent");
    $(".one").css("background-color", "transparent");
    $(".two").css("background-color", "transparent");
    $(".three").css("background-color", "transparent");
    $(".four").css("background-color", "#bdc3c7");
    $(".five").css("background-color", "transparent");

  }
  else if (scroll >= s_1_height + s_2_height + s_3_height  + s_4_height + spoiler_h){

    $(".dis").css("background-color", "transparent");
    $(".one").css("background-color", "transparent");
    $(".two").css("background-color", "transparent");
    $(".three").css("background-color", "transparent");
    $(".four").css("background-color", "transparent");
    $(".five").css("background-color", "#bdc3c7");
  }
}

check_dot();



$( window ).resize(function() {
  if (a_or_d == true){
    s_1_height = $("#asc").children(".season1").outerHeight();
    s_2_height = $("#asc").children(".season2").outerHeight();
    s_3_height = $("#asc").children(".season3").outerHeight();
    s_4_height = $("#asc").children(".season4").outerHeight();
    s_5_height = $("#asc").children(".season5").outerHeight();
    var spoiler_h = $("#spoiler").outerHeight() - 52;
  }else{
    s_1_height = $("#desc").children(".season5").outerHeight();
    s_2_height = $("#desc").children(".season4").outerHeight();
    s_3_height = $("#desc").children(".season3").outerHeight();
    s_4_height = $("#desc").children(".season2").outerHeight();
    s_5_height = $("#desc").children(".season1").outerHeight();
    var spoiler_h = $("#spoiler").outerHeight() - 52;
  }
  check_dot();
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

$(".direction_toggle").click(function(event){
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
          bottom: '-=32'
      }, 500);

      a_or_d = false;
      // $(".state1").hide();
      // setTimeout(function() {
      //   $(".state2").animate({
      //       bottom: '+=19'
      //   }, 0);

      //   $(".state2").show();
      // }, 501);
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
          bottom: '+=32'
      }, 500);
      a_or_d = true;

      
      // setTimeout(function() {
      //   $(".state1").show();
      // }, 501);

      // $(".state2").hide();
      // $(".state2").animate({
      //     bottom: '-=20'
      // }, 0); 

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



$(window).scroll( function(){
  check_dot();
});

$(".dis").click(function() {

  $('html, body').animate({
    scrollTop: $("#spoiler").offset().top
  }, 500);

});

$(".one").click(function() {
  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season1").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season5").offset().top
    }, 500);
  }
});

$(".two").click(function() {
 
  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season2").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season4").offset().top
    }, 500);
  }

});

$(".three").click(function() {
  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season3").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season3").offset().top
    }, 500);
  }
});

$(".four").click(function() {
  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season4").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season2").offset().top
    }, 500);
  }
});

$(".five").click(function() {
  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season5").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season1").offset().top
    }, 500);
  }
});

$("#up").click(function(){

  if (a_or_d == true){
    $('html, body').animate({
      scrollTop: $("#asc").children(".season1").offset().top
    }, 500);
  }
  else{
    $('html, body').animate({
      scrollTop: $("#desc").children(".season5").offset().top()
    }, 500);
  }

});


