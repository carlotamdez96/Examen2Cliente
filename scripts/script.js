import { productos } from "./productos.js";

window.onload=function(){

    var arrayProductos=[];
    var memoria =[];
    var memoria1=[];
    var memoria2=[];
    /*Referencias*/


// Dado que inicialmente solo esta el body, y al body no hace falta referenciarlo directamente se comenzará creando el contenido

var header = document.createElement("header");
var section = document.createElement("section");

document.body.appendChild(header);
document.body.appendChild(section);


/* Una vez creados los contenedores iniciales vamos con la creacióon del encabezado*/

let h1 = document.createElement("h1");
h1.textContent="Productos clasificados";
header.appendChild(h1);


/*Ahora irá la creación de los contenedores de dentro de section, donde estará el contenido*/

var divContenedorIzquierdo = document.createElement("div");
divContenedorIzquierdo.classList.add("contenedorIzquierdo");
var divContenedorDerecho = document.createElement("div");
divContenedorDerecho.classList.add("contenedorDerecho");

/* Creación del contenedor de la derecha*/
var divA = document.createElement("div");
divA.classList.add("contenedorContenidoDerecho");
var divB = document.createElement("div");
divB.classList.add("contenedorContenidoDerecho");

let h2A = document.createElement("h2");
h2A.textContent="Grupo A";
let divContenedorContenido = document.createElement("div");
divContenedorContenido.classList.add("contenidoDerecho");
divA.appendChild(h2A);
divA.appendChild(divContenedorContenido);

let h2B = document.createElement("h2");
h2B.textContent="Grupo B";
let divContenedorContenido2 = document.createElement("div");
divContenedorContenido2.classList.add("contenidoDerecho");
divB.appendChild(h2B);
divB.appendChild(divContenedorContenido2);


divContenedorDerecho.appendChild(divA);
divContenedorDerecho.appendChild(divB);


//Creación del contenido en el contenedor izquierdo. EN el json hay un array de objetos, el cual habrá que recorrer

for (let producto of productos) {
    //Creo el article que contendrá a cada producto 

    var fragment = new DocumentFragment();

    var article = document.createElement("article");
    //El articulo tendrá una imagen, y un contenedor de contenido. la imagen se sacará del json

    var imagen = document.createElement("img");
    imagen.src="./imagenes/"+producto.foto;
    imagen.alt="Foto de "+producto.denominacion;
    article.appendChild(imagen);


    //Creacion del contenedor de contenido

    var divContenido = document.createElement("div");
    divContenido.classList.add("contenedorContenido");
   // divContenido.id=producto.id;

    //Dentro del divContenido habrá un h3 , un p y un div botonera que contendrá los botones
    let h3 = document.createElement("h3");
    h3.textContent=producto.denominacion;
    divContenido.appendChild(h3);

    let parrafo = document.createElement("p");
    parrafo.textContent=producto.comentario;
    divContenido.appendChild(parrafo);

    let divBotonera = document.createElement("div");
    divBotonera.classList.add("botonera");

    //Este div Botonera contendrá dos btoenes, el grupo A y el grupo B los cuales tendrán un manejador de evento asoaciado cada uno
    var botonA = document.createElement("button");
    botonA.textContent="Grupo A"
    var botonB = document.createElement("button");
    botonB.textContent="Grupo B"
    divBotonera.appendChild(botonA);
    divBotonera.appendChild(botonB);
    divContenido.appendChild(divBotonera);

    botonA.addEventListener("click",añadirMemoria);
    botonB.addEventListener("click",añadirMemoria);

/*Funcion de Añadir memoria*/
    function añadirMemoria(){
        // memoria.push(producto);
//Aqui lo que hará será comprobar si el texto del boton es un grupo u otro, y en caso de ser uno u otro lo añade en un div diferente en cada caso.
        if(this.textContent=="Grupo A"){
            divA.innerHTML+=`<div class="contenidoDerecho">
                <div class="contContenido">
                <img src="./imagenes/${producto.foto}"  alt="producto ${producto.denominacion}">
                <p>${producto.denominacion}</p>
                </div>
            </div>`

            // divA.appendChild(divContenedorContenido);
        }else{
            
            divB.innerHTML+=`<div class="contenidoDerecho">
            <div class="contContenido">
            <img src="./imagenes/${producto.foto}" alt="producto ${producto.denominacion}">
            <p>${producto.denominacion}</p>
            </div>
            </div>`
    
        }
        //Aqui se cambia el estilo del boton, en caso de que sea seleccionado, se creara un boton nuevo en la botonera, que ocupará el 100%
        var botonNuevo = document.createElement("button");
        botonNuevo.textContent=this.textContent;
        botonNuevo.style.width="100%"
        botonNuevo.style.backgroundColor="#557153";
        botonNuevo.style.color="#E6E5A3";
        botonNuevo.style.cursor="auto";
        divBotonera.innerText="";
        divBotonera.appendChild(botonNuevo);
        


    }
    //Añadir el article al div de contenido

    article.appendChild(divContenido);


    fragment.appendChild(article);
    divContenedorIzquierdo.appendChild(fragment);
}



//Añado los elementos creados al section que será su padre
section.appendChild(divContenedorIzquierdo);
section.appendChild(divContenedorDerecho);



}
