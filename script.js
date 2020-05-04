$(function () {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass("change ")
    }); 
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        // console.log(position);
        if(position>=200){
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        // console.log(position);
        if(position>=570){
            $('.camera-img').addClass('from-left');
            $('.mission-text').addClass('from-right');
        }else{
            $('.camera-img').removeClass('from-left');
            $('.mission-text').removeClass('from-right');
        }
    });
$('.gallery-list-item').click(function(){
    let value=$(this).attr('data-filter');
    if(value=="all"){
        $('.filter').show('3000');
    }else{
        $('.filter').not(`.${value}`).hide(3000);
        $('.filter').filter(`.${value}`).show(3000);
    }
});  
$('.gallery-list-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

});

$('.nav-item a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

});

