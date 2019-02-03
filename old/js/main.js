var pl,dl,slideIndex=1,gpar,pc,ind,el,slideIndexEvent=1,navcount=1;


$(document).ready(function(){
  
    var team_scroll_count=0;
    var team_count=$('.tlist-count').length;
    var tpro_count=$('.pro-box').length;
    var pro_count=0;
    $('.team-prev').hide();
    $('.modal-pro-less').hide();

    $('.nav-button').click(function(){
        navcount++;
        if(navcount%2===0)
            $('.small-nav-screen').css('margin-left','0');
        else
            $('.small-nav-screen').css('margin-left','-70%');
    });
    
    $('.symbol img').click(function(){
    	$(document).scrollTop(0);
    });

    $('.sub').click(function(e){
        alert("Your Submission was Successfull");
    });

    $('#xcode').hover(function(){
        $('.xcode').attr('src','img/icons/xcode_white.svg');
    },function(){
        $('.xcode').attr('src','img/icons/xcode.svg');
    });

    
    $('.nav-list li,.small-nav-list li').click(function(){
            var i=$(this).index();
            if(i==0){
                $('html,body').animate({scrollTop: $('#about-us').offset().top-100});
            }
            else if(i==1){
                $('html,body').animate({scrollTop: $('#events').offset().top-100});
            }
            else if(i==2){
                $('html,body').animate({scrollTop: $('#team').offset().top-100});
            }
            else if(i==3){
                $('html,body').animate({scrollTop: $('#projects').offset().top-100});
            }
            else if(i==4){
                $('html,body').animate({scrollTop: $('#partners').offset().top-100});
            }
            else if(i==5){
                $('html,body').animate({scrollTop: $('#cme').offset().top-100});
            }

            $('.small-nav-screen').css('margin-left','-70%');
    });

    $(document).scroll(function(){
        if($(window).scrollTop()>$('#cover-page').height()-100){
            $('.nav').addClass('extra-nav');
            $('.nav-list li').css('color','black');
            $('.nav-button div').css('background','black');
        }
        else{
            $('.nav').removeClass('extra-nav');
            $('.nav-list li').css('color','white');
            $('.nav-button div').css('background','white');
        }
    });

    $('.para-content').hover(function(){
        $('.para-head').css({'animation':'jump 0.75s ease-in infinite'});
        $('#eve-down').css('opacity','1');
        $('#pro-down').css({'animation':'out 0.5s ease-in','opacity':'1'});
        $('#events ul').css({'animation':'out_ul 0.5s ease-in','opacity':'1'});
    },function(){ 
        $('#pro-down').css({'animation':'in 0.15s ease-in','opacity':'0'});
        $('#events ul').css({'animation':'in_ul 0.5s ease-in','opacity':'0'});
        $('.para-head').css({'animation':''});
        $('#eve-down').css('opacity','0');
    });


    $('#projects-view').click(function(){
        $('#projects-modal').css('display','block');
        showProjects();
    });

   $('#events ul li').click(function(){
        var e_ind=$(this).index()+1;
        switch(e_ind){
            case 1:
                $('#classroom_model').css('display','block');
                el=$('#classroom_model').children('.modal-list').children('.modal-content');
                slideIndexEvent=1;
                showEvents(slideIndexEvent);
                break;
            case 2:
                $('#prem_model').css('display','block');
                el=$('#prem_model').children('.modal-list').children('.modal-content');
                slideIndexEvent=1;
                showEvents(slideIndexEvent);
                break;
            case 3:
                $('#work_model').css('display','block');
                el=$('#work_model').children('.modal-list').children('.modal-content');
                slideIndexEvent=1;
                showEvents(slideIndexEvent);
                break;
        }
   });


   $('.close,.cme-close').click(function(){
       $('.modal-box,.form-pop').css('display','none');
       $('.modal-list').transition({y:'0%'});
   });

   $('.gal-close').click(function(){
       $('.gallery').css('display','none');
   });

   $('.show-gal').click(function(){
       gpar=$(this).parents('.modal-list');
       ind=$(this).parents('.modal-content').index();
       pc=gpar.siblings('.gallery').eq(ind);
       pc.css('display','block');
       pl=pc.children('.pic-container').children('.pic-slide');
       dl=pc.children('.dot-group').children();
       slideIndex=1;
       showSlides(slideIndex);
   });


   $('.about-list li').hover(function(){
       $(this).children('.alist-pic,p').toggleClass('faa-bounce animated');
   });



   $('.pic-next').click(function(){
       addSlides(1);
   });

   $('.pic-prev').click(function(){
       addSlides(-1);
   });

   $('.model-more').click(function(){
       addEvent(1);
   });

    $('.model-less').click(function(){
       addEvent(-1);
   });

    $('.team-next').click(function(){
        team_scroll_count++;
        $('.team-list').transition({'x':'-=25%'});
        if(team_scroll_count===0)
            $('.team-prev').hide();
        if(team_scroll_count>0)
            $('.team-prev').fadeIn();
        if((((team_scroll_count+1)*4)%(team_count))<4)
             $('.team-next').hide();
    });

    $('.team-prev').click(function(){
        team_scroll_count--;
        $('.team-list').transition({'x':'+=25%'});
        if(team_scroll_count===0)
            $('.team-prev').hide();
        if(team_scroll_count>0)
            $('.team-prev').fadeIn();
        if((((team_scroll_count+1)*4)%(team_count))>=4)
             $('.team-next').fadeIn();
    });

    $('.modal-pro-more').click(function(){
        pro_count++;
        $('.modal-pro-list').transition({'x':'-=50%'});
        if(pro_count===0)
            $('.modal-pro-less').hide();
        if(pro_count>0)
            $('.modal-pro-less').fadeIn();
        if((((pro_count+1)*4)%(tpro_count))<4)
             $('.modal-pro-more').hide();
    });

    $('.modal-pro-less').click(function(){
        pro_count--;
        $('.modal-pro-list').transition({'x':'+=50%'});
        if(pro_count===0)
            $('.modal-pro-less').hide();
        if(pro_count>0)
            $('.modal-pro-less').fadeIn();
        if((((pro_count+1)*4)%(tpro_count))>=4)
             $('.modal-pro-more').fadeIn();
    });

     
    

    $('#team-main-con').hover(function(){
        $('.team-next,.team-prev').css('opacity','1');
    },function(){
        $('.team-next,.team-prev').css('opacity','0');
    });

    $('[type="text"]').focus(function(){
        $(this).parent().children('p').transition({y:'-120%'}).css('font-size','15px');
    });

    $('[type="text"]').blur(function(){
        if($(this).val()==="")
            $(this).parent().children('p').transition({y:'100%'}).css('font-size','20px');
    });
  

});

    $('.form-mobile-sub').click(function(){
        $('.form-pop').css('display','flex');
    });

function addSlides(n){
    showSlides(slideIndex+=n);
}

function addEvent(n){
    showEvents(slideIndexEvent+=n);
}

function showSlides(n){
    if(n>pl.length)
        slideIndex=1;
    if(n<1)
        slideIndex=pl.length;

    for(var i=0;i<pl.length;i++)
        $(pl[i]).css('display','none');
    for(var i=0;i<dl.length;i++)
        $(dl[i]).removeClass('active');

    $(pl[slideIndex-1]).css('display','block');
    $(dl[slideIndex-1]).addClass('active');
}

function showEvents(n){
    if(n>el.length)
        slideIndexEvent=1;
    if(n<1)
        slideIndexEvent=el.length;

    for(var i=0;i<el.length;i++)
        $(el[i]).css('display','none');

    $(el[slideIndexEvent-1]).css('display','block');
}