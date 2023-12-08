console.log("hola mundo desde js")

function generarColorRGBAleatorio() {
  // Generar valores aleatorios para rojo, verde y azul
  var rojo = Math.floor(Math.random() * 256);
  var verde = Math.floor(Math.random() * 256);
  var azul = Math.floor(Math.random() * 256);
  return [rojo, verde, azul];
}

function cambiarColorFondo(fondo) {
  let colorfondo="rgb("+fondo[0]+", "+fondo[1]+", "+fondo[2]+")";
  document.body.style.backgroundColor=colorfondo;
};

function cambiarColor() {
  var colorGenerado=generarColorRGBAleatorio(); 
  cambiarColorFondo(colorGenerado);
  cambiarTexto("red",colorGenerado[0]);
  cambiarTexto("green",colorGenerado[1]);
  cambiarTexto("blue",colorGenerado[2]);
};

function cambiarColorViaInput() {
  var r=document.getElementById("red").value
  var g=document.getElementById("green").value
  var b=document.getElementById("blue").value
  var colorGenerado=[r,g,b];
  cambiarColorFondo(colorGenerado);
  cambiarTexto("red",colorGenerado[0]);
  cambiarTexto("green",colorGenerado[1]);
  cambiarTexto("blue",colorGenerado[2]);
};

function cambiarTexto(nombreColor,valorColor) {
  document.getElementById("label_"+nombreColor).innerText=nombreColor+" "+valorColor;
  document.getElementById(nombreColor).value=valorColor;
}


// listeners.....
document.getElementById("btn").addEventListener("click",cambiarColor);
document.getElementById("red").addEventListener("input",cambiarColorViaInput);
document.getElementById("green").addEventListener("input",cambiarColorViaInput);
document.getElementById("blue").addEventListener("input",cambiarColorViaInput);

cambiarColor()

