// use jquery objects and elements to do the following:
// 1. change the background color of the body to a light blue
// 2. change the font color of the h1 to a dark blue
// 3. change the font color of the p to a light blue
// 4. change the font color of the li to a dark blue
// 5. hide the elemnt with ahyperling to a new tabx

/*
$('body').css('background-color', 'lightblue');
$('h1').css('color', 'darkblue');
$('p').css('color', 'lightblue');
$('.intro').css('color', 'black');
$('li').css('color', 'darkblue');
$('a').hide();


$("#b2").click(function(){
    $(".para").show();
    $(".para").css("color", "white");
    $(".para").css("background-color", "black");
});
    */

$(document).ready(() => {
    $('#b1').click(function(){
        $('.square1').toggle(1000);
        $('.square2').toggle("slow");
        $('.square3').toggle(3000);
    });
});