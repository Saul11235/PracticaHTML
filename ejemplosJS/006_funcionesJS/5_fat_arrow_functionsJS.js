//este es un ejemplo de fat arrow functions
//REGLAS
//  si es de una linea return es implicito
// funciona del mismo modo del que se declara una constante

//caso una sola linea
const funSuma = (a,b) => a+b 

//caso varias lineas
const funMulti = (a,b) => {
  let resultado=a*b;
  return resultado;  //si es de varias lineas el return es necesario
}

let num1=22
let num2=33

console.log("funcion fat arrow ejem suma ")
console.log("numero 1",num1)
console.log("numero 2",num2)
console.log("resultado",funSuma(num1,num2))

console.log("\nfuncion fat arrow ejem multiplic ")
console.log("numero 1",num1)
console.log("numero 2",num2)
console.log("resultado",funMulti(num1,num2))


