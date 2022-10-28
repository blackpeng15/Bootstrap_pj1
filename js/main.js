
$(document).ready(function(){
    $('.btn.btn-primary').trigger('click');
});


//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.btn_side').click(function(){
    $('.side_menu').animate({left:0},400);
    $('.side_menu').css('background-color', 'transparent');
    $('.inner_logo').animate({width:260},700);
    $('.btn_side').hide();
    
    // $('.bg_side .bg_bar').animate({ left: 0 }, 500);
    $('.bg_side .bg_bar').each(function(index){
        $(this).delay(index*50).animate({
            left: '0'
        })
    })
})

$('.btn_close').click(function(){
    $('.side_menu').animate({left:-270},200);
    $('.side_menu').css('background-color', '#0106D3');
    $('.inner_logo').animate({width:0},200);
    $('.btn_side').show();

    $('.bg_side .bg_bar').each(function(index){
        $(this).delay(index*50).animate({
            left: '-276'
        })
    })
})

