//funcion callback con javascript
//basicamente una funcion callback permite pasar como funciones	
//----para este caso vamos a declarar dos funciones
//estas se pueden usar como argumento de otras funciones
function sumarmasuno(numero) {
  console.log("  ",numero," + 1 = ",numero+1);
  return numero+1;
}
//---------------------------------------------
function sumarmasdos(numero) {
  console.log("  ",numero," + 2 = ",numero+2);
  return numero+2;
}
//------------------------------------------------------------
//una funcion callback es ingresar una funcion como argumento
function operarTresVeces(numero,funcion){
  console.log("\nEmpieza funcion ejecuta 3 veces con nro",numero)
  console.log("Nombre funcion",funcion)
  let respuesta=funcion(funcion(funcion(numero)))
  console.log("respuesta",respuesta)
}
//----EJECUTANDO LOS ELEMENTOS------------------
let variable=4  // <------ MODIFICAR

operarTresVeces(variable,sumarmasdos)
operarTresVeces(variable,sumarmasuno)



