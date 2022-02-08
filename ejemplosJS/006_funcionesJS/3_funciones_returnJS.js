//ejemplo de funcion con return
//Para este caso  devolvera un numero granizo

function esPar(numero) {
  if ( numero%2 ===0) {return true}
  else {return false;}
}
//-------------------------------------------
function numeroCollatz(numero) {
  console.log("\nNumero Analizado",numero)
  let numeroiterar=numero;
  let lista=[numero]; //array vacio
  while(numeroiterar!=1) {
    if (esPar(numeroiterar)) {
      numeroiterar=numeroiterar/2;
    }
    else {
      numeroiterar=3*numeroiterar+1
    }
    lista.push(numeroiterar)
  }
  return lista;
}
//---------------------------------------------
console.log("\nSERIE COLLATZ JAVASCRIPT\n")
var listaEjemplo=numeroCollatz(12) //devuelve una lista
console.log("Numero de terminos:",listaEjemplo.length)
console.log("Todos los elementos")
console.log(listaEjemplo)
