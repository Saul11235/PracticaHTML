var data= fetch("citas.json")

function cambiarColorFondo() {
  const color = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor= '#' + '0'.repeat(6 - color.length) + color;
};

function getCitaAleatoria() {
  return ["lolo","lsls"];
}

function accionBoton() {
  cambiarColorFondo();
  var cita=getCitaAleatoria();
  document.getElementById("cita").innerText=cita[0]
  document.getElementById("autor").innerText=cita[1]
};

accionBoton()
document.getElementById("btn").addEventListener("click",accionBoton)
