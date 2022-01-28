//El primer tipo de dato analizado sera el string
 
// se separa entre comillas simples o dobles
var texto1="Hola esto es una cadena de texto"
var texto2='Hola este es otro texto'
console.log(texto1)
console.log(texto2)


// valores booleanos
var verdadero=true
var falso=false
console.log(verdadero,falso)


//variable nulo o vacio
var nulo=null
console.log(nulo)


//variable no definida
//NOTA. en caso no se indique el tipo tambien aplica
var nodefinida=undefined
console.log(nodefinida)


//variable tipo numerica
var numero=Number(1)
var otronum=21
var unNumMas=333.33
console.log(numero,otronum,unNumMas)
//en este lenguaje los enteros y floats son tratados como un mismo tipo
//de objeto :/ 


//variable tipo object
// son estructuras mas complejas para definir agrupan a lso tipos anteriores
var miPrimerObjeto={}/*obj vacio*/
var miSegundoObjeto={
  //asignando valores al objeto
  unNumero:11,
  unSting:"Hola soy un string",
  soyUnaCond:true,
}
console.log(miPrimerObjeto,miSegundoObjeto)
//podemos acceder a las propiedades del objeto
console.log(miSegundoObjeto.unNumero)


//variale tipo array
//listas estructuras paara enumerar objetos
var arrayVacio=[]
var arrayConContenido=[2,3,"hola"]
console.log(arrayVacio,arrayConContenido)
//puede tener dentro otros arrays objetos etc
//se pueden ahcer acctiones como agregar
arrayConContenido.push("nuevo")
console.log(arrayConContenido)
