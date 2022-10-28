

    var palabra = "ALURA";
    var estado = 1;
    var adivinado = ["A","L","U","R"];
    var errores =["X","I","S"]; 

    // var munneco = document.querySelector();
    var palabrahtml = document.querySelector(".palabra-adivinar");
    var letrasErrores = document.querySelector(".letras-usadas");

    function juego (){
        
        for (let letra of palabra){
            let item = document.createElement("SPAN");
            let textItem = document.createTextNode("");

            if (adivinado.indexOf(letra)>=0){
                textItem.nodeValue = letra;
            }
            item.appendChild(textItem);
            palabrahtml.appendChild(item);
            item.classList.add("letra-adivinada");
        }
        
        for (let letra of errores){

            let item = document.createElement("SPAN");
            let textItem = document.createTextNode(letra);
            item.appendChild(textItem);
            letrasErrores.appendChild(item);
            


        }
    }

function adivinar(letra) {

    if (estado ===1 ||  
    
}


juego()
