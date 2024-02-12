const btn = document.querySelector(".ham");
const nav = document.querySelector(".nav");

btn.onclick = () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1,
    },
    speed: 5000,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
  });