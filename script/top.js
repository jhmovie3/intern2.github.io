// template button

const btn = document.querySelector(".ham");
const nav = document.querySelector(".nav");

btn.onclick = () => {
    nav.classList.toggle("open");
}




const hover = document.getElementById('hover');
const button = document.getElementById('button');
const text = document.getElementById('text');
const static = document.getElementById('static');

hover.addEventListener('mouseover', () => {
    button.style.scale = '1.2';
    button.style.transform = 'translateX(-0.7rem)'
    text.style.transform = 'translateX(0.7rem)'
    text.style.color = '#45B7D2'
    static.style.scale = '0.8';
})

hover.addEventListener('mouseout', () => {
    button.style.scale = '1';
    button.style.transform = 'translateX(0)'
    text.style.transform = 'translateX(0)'
    text.style.color = '#9B9B9B'
    static.style.scale = '1'
})



const hover2 = document.getElementById('hover2');
const button2 = document.getElementById('button2');
const text2 = document.getElementById('text2');
const static2 = document.getElementById('static2');

hover2.addEventListener('mouseover', () => {
    button2.style.scale = '1.2';
    button2.style.transform = 'translateX(-0.7rem)'
    text2.style.transform = 'translateX(0.7rem)'
    static2.style.scale = '0.9';
})

hover2.addEventListener('mouseout', () => {
    button2.style.scale = '1';
    button2.style.transform = 'translateX(0)'
    text2.style.transform = 'translateX(0)'
    static2.style.scale = '1'
})

var bar = document.querySelector('.bar span');
const swiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 5000, // 5 seconds
    },
    loop: true,
    fade: 'true',
    slidesPerView: 1,
    spaceBetween: 0, /* No space between slides */
    // centeredSlides: false,
    on: {
        slideChangeTransitionStart: function () {
         bar.style.transitionDuration = '0s',
         bar.style.transform = 'scaleX(0)'
        },
        slideChangeTransitionEnd: function () {
         bar.style.transitionDuration = 5000 + 'ms',
         bar.style.transform = 'scaleX(1)'
        },
       }
});



var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    // 한번의 슬라이드로 몇개 슬라이드시킬까 지정
    slidesPerGroup: 1,
    speed: 500,
    autoplay: { // 自動再生
      delay: 2000, // 2秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    loop: true,
    centeredSlides: true,
    fade: 'true',
    gragCursor: 'true',
    loopFillGroupWithBlank: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
  });