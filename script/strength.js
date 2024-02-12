const btn = document.querySelector(".ham");
const nav = document.querySelector(".nav");

btn.onclick = () => {
    nav.classList.toggle("open");
}
