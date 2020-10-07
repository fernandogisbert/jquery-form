"use strict";


var boton = document.getElementById('button');




function formulario() {
    // Recojo en variables los datos del formulario

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellidos').value;
    let usuario = document.getElementById('nombre__usuario').value;
    let email = document.getElementById('correo').value;
    let direccion1 = document.getElementById('direccion').value;
    let direccion2 = document.getElementById('direccion__secundaria').value;
    let paisElegido = document.getElementById('pais').value;
    let ciudad = document.getElementById('ciudad').value;
    let zip = document.getElementById('codigo__postal').value;
    let casilla1 = document.getElementById('checkbox1').value;
    let casilla2 = document.getElementById('checkbox2').value;

    // guardo en variable el formulario principal y donde quiero que salga

    let formularioPrincipal = document.getElementById('principal');
    let zonaParaQueSalgaLoNuevo = document.getElementById('captura');

    // hago desaparecer el formulario 

    formularioPrincipal.classList.add('desaparece');

    // meto la captura de los datos 

    
    console.log(nombre, apellido, usuario, email, direccion1, direccion2, paisElegido, ciudad, zip, casilla1, casilla2);
    
    let contentToInsert = `
    <div class="principal">
        <h3 class="mensaje__instertado"> Hola ${nombre} ${apellido}</h3>
        <p>Gracias por comprar en esta cutre página</p>
        <p>Tu nombre de usuario es ${usuario} y tu correo ${email}</p>
        <p>Dirección principal ${direccion1} y si no estas en casa te lo dejamos en ${direccion2}</p>
        <p>Pais: ${paisElegido} Ciudad: ${ciudad} Código Postal: ${zip}</p> 
    </div>
    `;

    zonaParaQueSalgaLoNuevo.innerHTML = contentToInsert;


}



boton.addEventListener('click', formulario);

