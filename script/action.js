$('.char_box li').eq(0).addClass('active')

let charactor = setInterval(charRolling, 2000)


let i = 0
function charRolling(){
    i++
    if(i >= 4){
        i = 0
    }
    $('.char_box li').eq(i).addClass('active').siblings().removeClass();
}

$('.char_box li').mouseenter(function(){
    clearInterval(charactor)
    $(this).addClass('active').siblings().removeClass()
    i = $(this).index()
})
$('.char_box li').mouseleave(function(){
    charactor = setInterval(charRolling, 2000)
})


//관심상품
// $('.favorite').each(function(){
//     favorite.call(this)
// })
// $('.favorite').click(function(){
//     $(this).toggleClass('active')
//     favorite.call(this)
//     return false
// })

// function favorite(){
//     if($(this).hasClass('active')){
//         $(this).text('♥').css({color:'#ebd368'});
//     } else {
//         $(this).text('♥').css({color:''});
//     }

// }


//최근 본 상품 
//parsInt() 숫자로 바꾸는 함수
let todayTop = parseInt( $('.prod_today').css('top') )

//서브 변수
if($('#section_sub').length > 0){
    prodNavPosi = $('.prod_nav').offset().top
}

$(window).scroll(function(){
    let scrT = $(window).scrollTop();

    $('.prod_today').stop().animate({top:scrT+todayTop}, 800)

    if(scrT >= prodNavPosi) {
        $('.prod_nav').addClass('active')
    } else {
        $('.prod_nav').removeClass('active')
    }
})


// 서브
$('.small_img li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src')
    $('.big_img img').attr('src',imgSrc)
    $(this).addClass('active').siblings().removeClass()
})






$('.prod_nav a').click(function(){
    let prodNavHref = $(this).attr('href');

    let prodNavTop = $(prodNavHref).offset().top;

    $('html').animate({scrollTop:prodNavTop - 70})
})