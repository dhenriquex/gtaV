const botao = document.querySelector(".plataforma-b");
const elemento = document.querySelector(".plataforma-b .plataformas");

botao.addEventListener("click", () => {
    elemento.classList.toggle("ativo");
});
