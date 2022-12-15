
const logo = document.querySelector("[logo]")
const btnIniciarJuego = document.querySelector("[btn-start]");
const mainElement = document.querySelector("[main-div]")
const ahorcadoElement = document.querySelector(".ahorcado-div")
const btnNuevoJUego = document.querySelector("[nuevo-juego]")
const botones = document.querySelector(".botones")
const btnRendirse = document.querySelector("[rendirse]")
const btnNuevaPalabra = document.querySelector("[btn-add]")
const munnecoElement = document.querySelector("[data-munneco]")
const nuevaPalabraElement = document.querySelector("[agregar-palabra]")
const nuevaPalabraTextarea = document.querySelector("[data-palabra]")

const principal = document.querySelector(".botones")

btnRendirse.addEventListener("click", ()=> {
   if(confirm("Esta seguro que quieres rendirte")) {
    ahorcadoElement.style.display= "none"; 
    botones.style.display= "flex";
    palabraAdivinar.innerHTML = "";
    letrasAcertadasElement.innerHTML = "";
    letrasErradasElement.innerHTML = "";
    munnecoElement.innerHTML= "";
   }
    
})

btnIniciarJuego.addEventListener("click", iniciarJuego)

function iniciarJuego() {
    btnIniciarJuego.parentElement.style.display = "none";
    ahorcadoElement.style.display= "block";
    logo.classList.replace("logo","logo-naranja");    
    btnNuevoJUego.removeAttribute.disabled;
    btnNuevoJUego.classList.add("juego-activo")
    //nuevoJuego();
    activarTeclas();    
}

btnNuevaPalabra.addEventListener("click", ()=> {
    btnIniciarJuego.parentElement.style.display = "none";
    nuevaPalabraElement.style.display = "flex"
    logo.classList.replace("logo","logo-violeta");  
})

btnNuevoJUego.addEventListener("click", () => {
    btnNuevoJUego.disabled="true";
    btnNuevoJUego.classList.remove("juego-activo");
    nuevoJuego();
    activarTeclas()
})



const palabras = ["alexis"];
const palabraAdivinar = document.querySelector("[palabra]");
const letrasAcertadasElement = document.querySelector("[letras-acertadas]");
const letrasErradasElement = document.querySelector("[letras-erradas]");

let palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)]; 
let letrasAcertadas = [];
let  letrasErradas = [];
let vidas = 7;
let contador = palabraSecreta.length;
let aciertos = 0;
let palabraSecretaLetrasUnicas = 0;



function nuevoJuego(){
    palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)]; 
    letrasAcertadas = [];
    letrasErradas = [];
    vidas = 7;
    palabraSecretaLetrasUnicas = new Set(palabraSecreta).size;
    
    contador = palabraSecreta.length;
    aciertos = 0;
    avisoElement.innerText= "";
    palabraAdivinar.innerHTML = "";
    letrasAcertadasElement.innerHTML = "";
    letrasErradasElement.innerHTML = "";
    munnecoElement.innerHTML= "";
    dibujarPalabraSecreta();
    dibujarHorca();
}

function dibujarPalabraSecreta() {
    for (let letra of palabraSecreta) {
        const spanLetra = document.createElement("span")      
        if (letrasAcertadas.includes(letra)){
            spanLetra.innerText = letra.toLocaleUpperCase();
            contador--
        } else {
            spanLetra.innerText = " ";
        }
        palabraAdivinar.appendChild(spanLetra);
    }
}

function comprobarEstado() {
    if (aciertos  == palabraSecretaLetrasUnicas) {
        AvisoGanarPerder("GANASTE!")
        btnNuevoJUego.removeAttribute("disabled");
        document.removeEventListener("keydown", presionarTecla)   
        btnNuevoJUego.classList.add("juego-activo") 
    }

    if (vidas == 0) {
        AvisoGanarPerder("PERDISTE!")
        btnNuevoJUego.removeAttribute("disabled") ;
        document.removeEventListener("keydown", presionarTecla)   
        btnNuevoJUego.classList.add("juego-activo") 
    }
}

function activarTeclas(){
    document.addEventListener("keydown", presionarTecla)  
}  

function presionarTecla(e) {

    if (e.keyCode >= 64 && e.keyCode<=90 || e.keyCode ==192) {  
        if (palabraSecreta.includes(e.key) && !letrasAcertadas.includes(e.key)) {
            letrasAcertadas.push(e.key);
            const spanLetraAcertada = document.createElement("span")
            console.log(e.key)
            spanLetraAcertada.innerText= e.key;
            letrasAcertadasElement.appendChild(spanLetraAcertada);
            aciertos++;
                
        }else if (!palabraSecreta.includes(e.key)&& !letrasErradas.includes(e.key)) {
            letrasErradas.push(e.key);
            const spanLetraErrada = document.createElement("span");
            spanLetraErrada.innerText= e.key;
            letrasErradasElement.appendChild(spanLetraErrada);
            vidas--
            munnecoElement.appendChild(dibujarMunneco());  
        }     
        console.log(palabraSecreta.length, aciertos)
        palabraAdivinar.innerHTML = "";
        dibujarPalabraSecreta();               
    } 
    comprobarEstado();    
    
}

function dibujarMunneco() { 
    const munneco = document.createElement("div");
    munneco.classList.add(`munneco-parte`);
    munneco.classList.add(`munneco-parte${vidas}`);
    return munneco
}

palabrasNuevas = JSON.parse(localStorage.getItem("palabras"))  || [];



function agregarpalabraLocal(){
    if (!palabrasNuevas.includes(nuevaPalabraTextarea.value.toLowerCase())){
        palabrasNuevas.push(nuevaPalabraTextarea.value.toLowerCase())
        nuevaPalabraTextarea.value= "";
        console.log(palabrasNuevas)
        localStorage.setItem("palabras", JSON.stringify(palabrasNuevas))
        console.log(JSON.stringify(palabrasNuevas))
        palabrasNuevas.forEach(palabraNueva => {
            palabras.push(palabraNueva);
        });
        iniciarJuego()
        nuevoJuego()
    } else {
        alert("esa palabra ya existe")
    }
} 

nuevaPalabraTextarea.addEventListener("keydown", (event)=> {
    if(!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57) || event.keyCode==8)){
        event.returnValue = false;
        alert("No se permiten caracteres especiales")
        return;
     }
     event.returnValue = true;
})
    


const btnAddStart = document.querySelector("[add-start]");


const btnCancel = document.querySelector("[btn-cancel]")

btnCancel.addEventListener("click", ()=> {

    logo.classList.replace("logo-violeta", "logo")

    nuevaPalabraElement.style.display="none";
    botones.style.display="flex";
    
    
})

btnAddStart.addEventListener("click", agregarpalabraLocal)


function dibujarHorca() {
    const piso = document.createElement("div");
    piso.classList.add("piso")
    const poste = document.createElement("div");
    poste.classList.add("poste")
    const poste2 = document.createElement("div");
    poste2.classList.add("poste2")
    munnecoElement.appendChild(piso);
    munnecoElement.appendChild(poste);
    munnecoElement.appendChild(poste2);
}

const avisoElement = document.createElement("div");
function AvisoGanarPerder(aviso){
    
    avisoElement.classList.add("aviso");
    avisoElement.innerText=aviso;
    ahorcadoElement.appendChild(avisoElement);
}
