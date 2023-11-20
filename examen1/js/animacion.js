document.addEventListener('DOMContentLoaded', function () {
    var hombreImage = document.getElementById('hombreImagen');

    hombreImage.addEventListener('mouseover', function () {
        // Inicia la rotación continua cuando el mouse pasa sobre la imagen
        hombreImage.style.animation = 'rotateContinuously 5s infinite linear';
    });

    hombreImage.addEventListener('mouseout', function () {
        // Detiene la rotación cuando el mouse sale de la imagen
        hombreImage.style.animation = 'none';
    });
});