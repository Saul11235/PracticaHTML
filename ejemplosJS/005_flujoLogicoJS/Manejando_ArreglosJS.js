//Manejando y llamando objetos dentro de arreglos

let MiArreglo=[11,22,32,44.4,555,66,7,"8","9999",1010]
//Averiguando el taman'o del arreglo
let tamano=MiArreglo.length

//---------------------------------------------------
console.log("\nAnalizando un arreglo")
console.log(MiArreglo)
console.log("Numero de elementos:",tamano,"\n")
//--------------------------------------------------
for (let i = 0; i < tamano ; i++) {
  console.log(" item nro:",i," = ",MiArreglo[i])
}
//--------------------------------------------------
console.log("\nAumentando elemento 2200")
MiArreglo.push(2200)  //<------PUSH
console.log(MiArreglo)
//---------------------------------------------------
console.log("\nQuitando Ultimo elemento")
MiArreglo.pop()      //<-------POP
console.log(MiArreglo)
