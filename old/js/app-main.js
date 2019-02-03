var slideArr,slideIndex;
$(document).ready(function(){

    slideIndex=1;
    slideArr=$('.fade-tile');
    showSlides(slideIndex);


    $('.know-more').click(function(){
        $('html,body').animate({scrollTop: $('.main-content').offset().top});
        $('.main-content').css({display:'block','animation':'bounceInUp 1s ease-in'});
    });


   $('.icon').hover(function(){
       $(this).children('i,span').toggleClass('faa-bounce animated');
   });


    $(window).scroll(function(){
        $('.slide').each(function(){
            var itemTop=$(this).offset().top;
            var top=$(window).scrollTop();

            if(itemTop <= top+400)
                $(this).css({display:'block','animation':'bounceInUp 1s ease-in'});
        });
    });

});

function showSlides(n){
    if(n>4)
        slideIndex=1;
    if(n<1)
        slideIndex=4;

    for(var i=0;i<4;i++){
        $(slideArr[i]).css({'display':'none'});
    }
    
    $(slideArr[slideIndex-1]).css({'display':'block'});
}

setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
},3000);