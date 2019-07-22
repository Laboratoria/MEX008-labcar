const sesion=document.getElementById("inicia-sesion");
const modalSesion=document.getElementById("modal-session");
const close=document.getElementById("logging");


const show = () =>{
    modalSesion.style.display="flex";
    modalSesion.style.visibility="visible";
}

const closeWindow = () =>{
    modalSesion.style.display = "none";
    modalSesion.style.visibility="collapse";
}

sesion.addEventListener('click', show);
close.addEventListener('click', closeWindow);

let menu= document.querySelector('.main-hamburger');

let toggleMenu = (event) =>{
    menu.classList.toggle('is-active');
    document.querySelector(".menu-app").classList.toggle("is_active");
    event.preventDefault();
}
menu.addEventListener('click', toggleMenu, false);

  google.load('maps','2',{callback:simple});var map;
    function simple(){
       var map = new GMap2(document.getElementById("show-map"));
       map.setCenter(new GLatLng(19.421523, -99.163199),4);
 };