// 탑버튼
$('.gotop').on('click', function (e) {
    e.preventDefault()
    $('html').animate({
        scrollTop: 0
    }, 500)
})

// 슬라이드
$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {arrows: false},
        
    }
]
})

// 플레이 스탑버튼
$('#article1 .playstop').on('click', function () {
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fas fa-pause')) {
        $('.slide_group1').slick('slickPause')
        $ibutton.removeClass('fas fa-pause').addClass('fas fa-play')
    } else {
        $('.slide_group1').slick('slickPlay')
        $ibutton.removeClass('fas fa-play').addClass('fas fa-pause')
    }
})


var article2Near = $('#article2').offset().top - (wh / 2+100)
var article3Near = $('#article3').offset().top - (wh / 2+100)
// css에서 fixed 하지말고 on붙으면 이렇게 스크롤바내려오면 되도록 설정
$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    // if (sct >= 50 && !$('#header').hasClass('on')) {
    //     $('#header').addClass('on')
    //     $('.gotop').addClass('on')
    // } else if (sct < 50 && $('#header').hasClass('on')) {
    //     $('#header').removeClass('on')
    //     $('.gotop').removeClass('on')
    // }

    // article2
    if (sct >= article2Near && !$('#article2').hasClass('on')) {
        $('#article2').addClass('on')
    } else if (sct === 0) {
        $('#article2').removeClass('on')
    }


    // article3
    if (sct >= article3Near && !$('#article3').hasClass('on')) {
        $('#article3').addClass('on')
    } else if (sct === 0) {
        $('#article3').removeClass('on')
    }


    
})
