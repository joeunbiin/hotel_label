
$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct >= 10 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if (sct < 10 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on')
    }
})

// gotop버튼 클릭시 부드럽게 위로 스크롤시키기
$('.gotop').on('click', function (e) {
    e.preventDefault()
    $('html').animate({
        scrollTop: 0
    }, 500)
})


var ww = $(window).width();

if ( ww>1024 ) {
    $('.nav .depth1 > li').hover(
        function(){ 
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
} else {
    $('.nav .depth1 > li').on('click', function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })
}