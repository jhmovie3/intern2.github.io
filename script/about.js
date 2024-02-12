const btn = document.querySelector(".ham");
const nav = document.querySelector(".nav");

btn.onclick = () => {
    nav.classList.toggle("open");
}

const scrollTrigger = document.querySelector(".feature");
const item1Img1 = document.querySelector(".item1Img1");
const item1Img2 = document.querySelector(".item1Img2");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                item1Img1.style.opacity = 1;
                item1Img1.style.transform = "translateY(0)";
            }

            if (entry.intersectionRatio >= 0.7) {
                setTimeout(function () {
                    item1Img2.style.opacity = 1;
                    item1Img2.style.transform = "translateY(0)";
                  }, 200);
            }
        }
    });
}, { threshold: [0.5, 0.7] });

observer.observe(scrollTrigger);




const scrollTrigger2 = document.querySelector(".r_feature");
const r_item1Img1 = document.querySelector(".r_item1Img1");
const r_item1Img2 = document.querySelector(".r_item1Img2");
const r_item1Img3 = document.querySelector(".r_item1Img3");

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                r_item1Img1.style.opacity = 1;
                r_item1Img1.style.transform = "translateY(0)";
                setTimeout(function () {
                    r_item1Img3.style.opacity = 1;
                    r_item1Img3.style.transform = "translateY(0)"
                  }, 200);
            }

            if (entry.intersectionRatio >= 0.7) {
                setTimeout(function () {
                    r_item1Img2.style.opacity = 1;
                    r_item1Img2.style.transform = "translateY(0)";
                  }, 300);
            }
        }
    });
}, { threshold: [0.5, 0.7] });

observer2.observe(scrollTrigger2);