document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos() {
  document.getElementById("headerBtn").addEventListener("click", mobileMenu);
  window.addEventListener("scroll", percentageScroll);
}

function mobileMenu() {
  var list = document.getElementById("headerList");
  if (list.classList.contains("oculto")) {
    list.classList.remove("oculto");
  } else {
    list.classList.add("oculto");
  }
}

function percentageScroll() {
  document.getElementById("percentageScroll").style.width = (window.scrollY * 100) / (document.body.offsetHeight - window.innerHeight) + "%";
}
