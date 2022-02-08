//esta funcion se encargara de mostrar como trabajan las funciones con argumentos

function contarHasta(limite) { 
  console.log("Vamos a contar hasta:",limite);
  let string="";
  for (let i=0;i<=limite; i++) {
    string+=i+";";
  }
  console.log(string,"\n")
}

//probando nuestra funcion
console.log("\nCONTANDO VARIOS NUMEROS\n")

contarHasta(100)
contarHasta(50)
contarHasta(75)

