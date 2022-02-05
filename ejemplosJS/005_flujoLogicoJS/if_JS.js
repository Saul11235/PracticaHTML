//ejemplo de forma if en js
//
var variable=true
variable=false// comentar o descomentar si corresponde

console.log("\nla variable analizada es:",variable,"\n")

//------------------------------------------------------------
//PARTE 1.- solo si es true
if (variable) {
  console.log("Parte 1- solo se ejecutara si es true")
}
//-----------------------------------------------------------
//PARTE 2.- solo se ejecuta si es false
if (!variable) {
  console.log("Parte 2-solo se ejecuta si es false")
}
//-----------------------------------------------------------
//PARTE 3,- ejecuta IF ELSE
if (variable) {
  console.log("Parte 3. IF... la variable es true")
} else {
  console.log("Parte 3. ELSE ... la variable es false")
}
//------------------------------------------------------------
//ejecutando instruccion IF ELSE 
if (variable) {
  console.log("Parte 4. IF la variable es true")
} else if(variable>3) {
  console.log("Parte 4 IF ELSE variable condicional")
} else {
  console.log("Parte 4- ELSE variable es false")
}

