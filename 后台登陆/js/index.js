$(function(){
    $('.switch').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).siblings('ul').slideDown(100).children('li');
        }else{
            $(this).siblings('ul').slideUp(100)
        }
       
        $(this).children('.b').toggleClass('.glyphicon glyphicon-triangle-top');
        $(this).children('.b').toggleClass('.glyphicon glyphicon-triangle-bottom');
    })
	
})
