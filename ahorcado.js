var palabras = ["alura"];
var palabraSelecionada = seleccionarPalabra();
document.getElementById("palabra").innerHTML = palabraSelecionada.replace(/\w/g,"*");

function seleccionarPalabra() {

    return palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();

}

console.log(palabraSelecionada);
var palabraActual = palabraSelecionada.replace(/\w/g,"*"); 
console.log(palabraActual);
var caracterSeleccionado = prompt("ingrese un caracter");
caracterSeleccionado = caracterSeleccionado.toUpperCase();

if (palabraSelecionada.includes(caracterSeleccionado)){
    
    palabraActual = palabraActual.replace(palabraActual[],caracterSeleccionado);
    console.log(palabraActual);
    
}



