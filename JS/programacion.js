"use strict";


var boton = document.getElementById('button');




function formulario() {
    // Recojo en variables los datos del formulario con selectores jquery

    let nombre = $("#nombre").val();
    let apellido = $('#apellidos').val();
    let usuario = $('#nombre__usuario').val();
    let email = $('#correo').val();
    let direccion1 = $('#direccion').val();
    let direccion2 = $('#direccion__secundaria').val();
    let paisElegido = $('#pais').val();
    let ciudad = $('#ciudad').val();
    let zip = $('#codigo__postal').val();
    let casilla1 = $('#checkbox1').val();
    let casilla2 = $('#checkbox2').val();

    // guardo en variable el formulario principal y donde quiero que salga

    let formularioPrincipal = $('#principal');
    let zonaParaQueSalgaLoNuevo = document.getElementById('captura');

    // hago desaparecer el formulario 

    formularioPrincipal.addClass('desaparece'); //classList.add('desaparece');

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

