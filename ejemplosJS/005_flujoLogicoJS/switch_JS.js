//ejemplo switch
//esto ajusta el comportamiento a una serie de parametros
let variable=4
console.log("\nvariable es:",variable)
console.log("\nSWITCH SIN BREAK\n----------------\n")
//ejemplo sin linea break =====================================
switch (variable) {
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
console.log("\nSWITCH CON BREAK\n----------------\n")
//ejemplo con linea break =====================================
switch (variable) {
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

