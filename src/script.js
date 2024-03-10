function toggleActive() {
  const mapa = document.getElementById("button-lista");
  const lista = document.getElementById("button-mapa");

  mapa.classList.toggle("active");
  mapa.classList.toggle("inactive");

  lista.classList.toggle("active");
  lista.classList.toggle("inactive");
}

function changeSelectColor() {
  document.getElementById("cidade").classList.remove("text-carnaval-grey");
  document.getElementById("cidade").classList.add("text-carnaval-black");
}