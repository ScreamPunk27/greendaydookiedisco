let menu = document.querySelector(".lista-menu");
let boton = document.querySelector(".botonazo");
let cerrarMenu = document.querySelector(".cerrarMenu");


boton.onclick = function() {
    menu.classList.toggle("mostrar");
}