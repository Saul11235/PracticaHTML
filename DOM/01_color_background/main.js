console.log("hola mundo desde js")

function generarColorHex() {
  // Genera un color aleatorio para hexadecimal
  const color = Math.floor(Math.random()*16777215).toString(16);
  return '#' + '0'.repeat(6 - color.length) + color;
};

function cambiarColorFondo(fondo) {
  document.body.style.backgroundColor=fondo;
};

function cambiarColor() {
  var colorGenerado=generarColorHex(); 
  cambiarColorFondo(colorGenerado);
  var etiqueta=document.getElementById("colorLabel")
  etiqueta.innerText=colorGenerado;
};

const boton=document.getElementById("btn");
boton.addEventListener("click",cambiarColor);

cambiarColor()

