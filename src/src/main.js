const sesion=document.getElementById("inicia-sesion");
const modalSesion=document.getElementById("modal-session");
const close=document.getElementById("logging");

const registrate=document.getElementById("registro");
const modalRegisttro=document.getElementById("modal-reg");
const enviar=document.getElementById("enviar");


const show = () =>{
    modalSesion.style.display="flex";
    modalSesion.style.visibility="visible";
    modalSesion.style.marginTop = "100px";
    modalSesion.style.left = ((document.body.clientWidth-350) / 2) +  "px";
    modalSesion.style.display = "flex";
}

const showa = () =>{
    modalRegisttro.style.display="flex";
    modalRegisttro.style.visibility="visible";
    modalRegisttro.style.marginTop = "100px";
    modalRegisttro.style.left = ((document.body.clientWidth-350) / 2) +  "px";
    modalRegisttro.style.display = "flex";
}

const closeWindow = () =>{
    modalSesion.style.display = "none";
    modalSesion.style.visibility="collapse";
}

const closeWindowa = () =>{
    modalRegisttro.style.display = "none";
    modalRegisttro.style.visibility="collapse";
}


sesion.addEventListener('click', show);
close.addEventListener('click', closeWindow);
registrate.addEventListener('click', showa);
enviar.addEventListener('click', closeWindowa);

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