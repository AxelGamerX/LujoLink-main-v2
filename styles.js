// Función para mostrar u ocultar la descripción detallada con animación
function toggleDescripcionWithAnimation() {
  let descripcion = document.querySelector(".leeme");
  if (descripcion.classList.contains("mostrar")) {
    descripcion.classList.remove("mostrar");
  } else {
    descripcion.classList.add("mostrar");
  }
}

function toggleMenu() {
  let menu = document.querySelector(".hidden-menu");
  if (menu.style.left === "-250px") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-250px";
  }
}
