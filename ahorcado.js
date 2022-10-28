let palabras = ["html","oracle"];

let tablero = document.querySelector(".palabra-adivinar");
let tablero2 = document.querySelector(".letras-usadas");
let palabraSecreta = "";
let letras = [];
let errores = 8;


function escogerPalabraSecreta() {

    let palabra = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
    palabraSecreta = palabra;
    console.log(palabraSecreta);

}

function comprobarLetra(key) {
    let estado =false;
    if(key >=65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        console.log(key)
        return estado

    }else { 
        estado = true
        console.log(key)
        return estado
    }
    
}

 function dibujarEspacios(letra) {
     for(let i=0;i<palabraSecreta.length;i++){
         let item = document.createElement("SPAN");
         let textItem = document.createTextNode("");
         
         item.appendChild(textItem);
         tablero.appendChild(item);
         item.classList.add("letra-adivinada");
         

     }
    
 }

 

//  function anadirLetraIncorrecta() {
//     errores=errores-1;
//     
    
//  }


function iniciarJuego() {

    escogerPalabraSecreta();
    dibujarEspacios();
    document.onkeydown = (e)=> {
        let letra = e.key.toUpperCase();
        
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i=0 ; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]=== letra){
                    
                }
            }
        } 
    }
    
}

// function escribirLetraCorrecta(index) {
    // tablero.
    
// }
iniciarJuego()