let indice = 0;

function mover(direccion) {
    const carrusel = document.querySelector('.carrusel-contenido');
    const informes = document.querySelectorAll('.informe-powerbi').length;
    indice += direccion;

    if (indice < 0) {
        indice = informes - 1;
    } else if (indice >= informes) {
        indice = 0;
    }

    carrusel.style.transform = `translateX(${-indice * 100}%)`;
}
