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



// rooms li
var num;
$('.roomlist > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})

// 슬라이드
$(".slide_group2").slick({
    autoplay: false, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})
