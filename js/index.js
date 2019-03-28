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
<<<<<<< HEAD
})
=======


// 	 var aaa = $('.aaa').outerHeight()+20;
// 	 var bbb= $('.bbb')
// 	$('.aaa').height( $('.aaa').outerHeight()-20);
// 	console.log($('.aaa').height($('.aaa').outerHeight()-17))
})

>>>>>>> master
