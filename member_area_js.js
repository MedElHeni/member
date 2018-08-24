$(document).ready(function () 
	{
	
$(".button-navbar-responsive").hover(function(){
    $(this).css("background-color","white");
    $(this).css("border","1px #1dd800 solid");
    $(".navbar .navbar-header > .button-navbar-responsive > span").css("background-color","#1dd800");
    }, function(){
    $(this).css("background-color", "#1dd800");
    $(".navbar .navbar-header > .button-navbar-responsive > span").css("background-color", "white");
});
	});


