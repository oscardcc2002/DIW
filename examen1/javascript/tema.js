/* function myFunction() {
    var element1 = document.querySelector('.second-section');
    var element2 = document.querySelector('.third-section');
    var element3 = document.querySelector('.fourth-section');
    var element4 = document.querySelector('.fifth-section');
    element1.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");

    element3.classList.toggle("dark-mode");

    element4.classList.toggle("dark-mode");
    element5.classList.toggle("dark-mode");


    
    var isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}
*/
// Verifica si el tema oscuro está habilitado en localStorage al cargar la página
window.addEventListener('load', function () {
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    var elements = document.querySelectorAll('.second-section, .third-section, .fourth-section, .fifth-section, .sixth-section, .footer');

    if (isDarkMode) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("dark-mode");
        }
        document.getElementById('id-sun').classList.remove('active');
        document.getElementById('id-moon').classList.add('active');
    } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("dark-mode");
        }
        document.getElementById('id-sun').classList.add('active');
        document.getElementById('id-moon').classList.remove('active');
    }
});








document.getElementById('id-sun').onclick = function() {
    var elements = document.querySelectorAll('.second-section, .third-section, .fourth-section, .fifth-section, .sixth-section, .footer');

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("dark-mode");
    }

    document.getElementById('id-moon').classList.remove('active');
    this.classList.add('active');

    // Guarda el estado del tema en el almacenamiento local
    localStorage.setItem("darkMode", "false");
};

document.getElementById('id-moon').onclick = function() {
    var elements = document.querySelectorAll('.second-section, .third-section, .fourth-section, .fifth-section, .sixth-section, .footer');

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dark-mode");
    }
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active');

    // Guarda el estado del tema en el almacenamiento local
    localStorage.setItem("darkMode", "true");
};
