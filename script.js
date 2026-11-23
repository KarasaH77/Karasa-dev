// ---------- MENU LATERAL ----------
const menuBtn = document.getElementById("menu-btn");
const menuPainel = document.getElementById("menu-painel");
const menuFundo = document.getElementById("menu-fundo");

function alternarMenu(abrir) {
  menuPainel.classList.toggle("aberto", abrir);
  menuFundo.classList.toggle("aberto", abrir);
  document.body.classList.toggle("menu-aberto", abrir);
  menuBtn.setAttribute("aria-expanded", abrir);
  menuBtn.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
}

menuBtn.addEventListener("click", () => {
  alternarMenu(!menuPainel.classList.contains("aberto"));
});
menuFundo.addEventListener("click", () => alternarMenu(false));
menuPainel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => alternarMenu(false));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") alternarMenu(false);
});

// ---------- CARROSSÉIS ----------
document.querySelectorAll(".carrossel").forEach((carrossel) => {
  const pista = carrossel.querySelector(".carrossel__pista");
  const passo = () => pista.querySelector(".card").offsetWidth + 20;

  carrossel.querySelector(".carrossel__btn--ant").addEventListener("click", () => {
    pista.scrollBy({ left: -passo(), behavior: "smooth" });
  });
  carrossel.querySelector(".carrossel__btn--prox").addEventListener("click", () => {
    pista.scrollBy({ left: passo(), behavior: "smooth" });
  });
});
