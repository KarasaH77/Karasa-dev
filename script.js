// ---------- MENU LATERAL ----------
const menuBtn = document.getElementById("menu-btn");
const menuPainel = document.getElementById("menu-painel");
const menuFundo = document.getElementById("menu-fundo");

function alternarMenu(abrir) {
  menuPainel.classList.toggle("aberto", abrir);
  menuFundo.classList.toggle("aberto", abrir);
  document.body.classList.toggle("menu-aberto", abrir);
  menuPainel.inert = !abrir;
  menuBtn.setAttribute("aria-expanded", String(abrir));
  menuBtn.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
}

menuPainel.inert = true;

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
  const btnAnt = carrossel.querySelector(".carrossel__btn--ant");
  const btnProx = carrossel.querySelector(".carrossel__btn--prox");

  const passo = () => {
    const card = pista.querySelector(".card");
    const gap = parseFloat(getComputedStyle(pista).gap) || 20;
    return (card ? card.offsetWidth : 280) + gap;
  };

  const atualizarBotoes = () => {
    const maxScroll = pista.scrollWidth - pista.clientWidth;
    btnAnt.disabled = pista.scrollLeft <= 2;
    btnProx.disabled = pista.scrollLeft >= maxScroll - 2;
  };

  btnAnt.addEventListener("click", () => {
    pista.scrollBy({ left: -passo(), behavior: "smooth" });
  });
  btnProx.addEventListener("click", () => {
    pista.scrollBy({ left: passo(), behavior: "smooth" });
  });

  pista.addEventListener("scroll", atualizarBotoes, { passive: true });
  window.addEventListener("resize", atualizarBotoes);
  atualizarBotoes();
});
