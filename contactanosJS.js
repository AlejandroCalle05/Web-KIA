
$(document).ready(function(){
    cambiarAsistente();
});

const boton = document.getElementById("boton");
const foto = document.getElementById("foto");
const nombre = document.getElementById("nom");
const email = document.getElementById("correo");
const telefono = document.getElementById("telefono");


async function cambiarAsistente(){
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        console.log(datos); 
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        email.textContent = datos.email;
        telefono.textContent = datos.phone;
    } catch (error){
        console.log(error);
    }
} 

boton.addEventListener('click', cambiarAsistente);
document.addEventListener('DOMContentLoaded', cambiarAsistente);