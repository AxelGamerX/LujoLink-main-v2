// Función para mostrar u ocultar la descripción detallada con animación
function toggleDescripcionWithAnimation() {
    var descripcion = document.querySelector('.descripcion-detallada');
    if (descripcion.classList.contains('mostrar')) {
        descripcion.classList.remove('mostrar');
    } else {
        descripcion.classList.add('mostrar');
    }
}

// Mismo Codigo de Arriba de Animacion XD
function toggleDescripcionWithAnimation() {
    var descripcion = document.querySelector('.leeme');
    if (descripcion.classList.contains('mostrar')) {
        descripcion.classList.remove('mostrar');
    } else {
        descripcion.classList.add('mostrar');
    }
}

function toggleMenu() {
    var menu = document.querySelector('.hidden-menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}