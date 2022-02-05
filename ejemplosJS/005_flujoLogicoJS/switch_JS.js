//ejemplo switch
//esto ajusta el comportamiento a una serie de parametros
let constante=4

//ejemplo sin linea break
switch (constante) {
  case 1:
    console.log("variable es uno");
  case 2:
    console.log("variable es dosss");
  case 3:
    console.log("variable es tres");
  case 4:  
    console.log("variable es cuatro");
  case 5:
    console.log("var es cincoooo");
  default:
    console.log("Otro valor no conozco");
}
//ejemplo con linea break termina el ciclo
console.log("\nejemplo con la instruccion break \n")
switch (constante) {
  case 1:
    console.log("variable es uno");
    break;
  case 2:
    console.log("variable es dosss");
    break;
  case 3:
    console.log("variable es tres");
    break;
  case 4:  
    console.log("variable es cuatro");
    break;
  case 5:
    console.log("var es cincoooo");
    break;
  default:
    console.log("Otro valor no conozco");
    break;
}

