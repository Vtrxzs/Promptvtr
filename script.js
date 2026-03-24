// ANO
document.getElementById("year").textContent = new Date().getFullYear();

// ANIMAÇÃO SCROLL
const elements = document.querySelectorAll(".reveal");

function showOnScroll() {
    const height = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < height - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// MENU MOBILE
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// TROCA DE IMAGEM
const imagem = document.getElementById("imagemIA");

const imagens = [
    "./img/img1.jpg",
];