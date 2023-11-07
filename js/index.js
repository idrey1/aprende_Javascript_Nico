//console.log('Hola Mundo');

/*
Tipos de datos en Javascript

String: cadena de caracteres.
'a', 
'Hola Mundo Maravilloso',
"chanchito feliz",
"Hola"

Boolean: 
true, 
false

Null: nulo, una variable se enc. vacia, no contiene datos

Number: cualquier número.
123,
453535463,
45,
1

"123" es un String, es distinto a 123 que es un Number.

Undefined: algo que no esta definido. Es una variable
que no ha sido definida o que no se le ha asignado un 
valor, ejem:
let variable;

Object: es un objeto.
*/ 

/*Definición de variables
var, forma antigua, tratemos de evitarla
let
const: hace referencia a constante
-El nombre debe iniciar con una letra del alfabeto.
*/ 

//var miPrimeraVariable = 'lala';

let miPrimeraVariable = 'Mi primera variable!!!';
console.log(miPrimeraVariable);

//mutabilidad (reasignado valor de variables)
miPrimeraVariable = "Esto ha cambiado";
console.log(miPrimeraVariable);

//boolean
let miBoolean = true;
let miOtroBool = false;

//numeros
let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -258;

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef;
console.log(undef);

let nulo = null;
console.log(nulo);

/*
Objeto:
Es una agrupación de datos. Estos datos hacen sentido entre
si.
Los objetos no tienen variables, tienen propiedades.
Objeto vacio: no contiene ningun dato.
*/ 

//Objeto vacio
const miPrimerObjeto = {}

//Objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true
}

console.log('--------------------------');
console.log(miObjeto);
console.log(miObjeto.unString);

/**
 * Arreglos:
 * Puede contener elementos de cualquier tipo.
 * Los indices inician en 0.
 * Su longitud la obtenemos con length.
 */
//Arreglo vacio
const arrVacio= [];
const arr = [1,2,'Hola','Mundo',miObjeto];

//console.log('Arreglo vacio:',arrVacio);
//console.log(arr);

arrVacio.push(5); //Agregar elemento a arreglo
arrVacio.push(3); 
arrVacio.push(1); 
arrVacio.push('Hola'); 
arrVacio.push(miPrimeraVariable);
console.log(arrVacio);

/**
 * Listas:
 * Los tipos de datos que contienen deben ser del mismo
 * tipo para considerarse como una lista.
 */

const suma = 1 + 2;
const restar = 1 - 2;
const multiplicar = 1 * 2;
const division = 9 / 3;

//console.log(suma, restar,multiplicar,division);

const modulo = 10 % 3;
//console.log(modulo);

let num = 5;
// num++;
// num++;
// num++;
// num++;
// num++;
// console.log(num);

// num--;
// num--;
// num--;
// num--;
// num--;

num += 5;
num -= 5;
num *= 5;
num /= 2;
//console.log(num);


/**
 * Operadores de comparación
 * 
 * Nos permiten hacer comparaciones entre distintos 
 * tipos de datos.
 */

//Igualdad estricta
const resultado1 = 5 === 6;

//Igualdad no estricta. Strings pueden ser iguales si el
//valor es el mismo.
const resultado2 = 5 == "5";

const resultado3 = 5 < 6;
const resultado4 = 5 < 5;
const resultado5 = 5 > 6;
const resultado6 = 5 > 4;

const resultado7 = 5 <=5;
const resultado8 = 5 <=6;
const resultado9 = 5 >=5;
const resultado10 = 5 >=6;

const resultado11 = 5 !== "5";
const resultado12 = 5 != "5";

console.log(resultado11,resultado12);

/**
 * Operadores lógicos
 * Existen 3 en javascript
 * or ||, and &&, not !
 */

const resultadoOr = false || false || 'Hola' ||'Mundo';
//console.log(resultadoOr);

const resultadoAnd = true && true;
//console.log(resultadoAnd);

const resultadoNot = !true;
//console.log(resultadoNot);

/**
 * Control de flujo
 * Nos permite realizar iteraciones y evaluar condiciones.
 */

//Control de flujo if
const edad = 5;
if (edad >5 && edad <18) {
    console.log('El niño puede jugar!!!');
} else{
    console.log('El niño no puede jugar :(');
}

//Control de flujo while
let x = false;
while (x){
    console.log(x);
    x=false;
}

//console.log('Terminando el loop');

//switch
/**
 * Permite ejecutar una intrucción u otra.
 * */
let y = 20;
switch (y){
    case 1:
        console.log('Yo soy el caso 1');
        break;
    case 2:
        console.log('Chanchito feliz');
        break;
    case 3:
        console.log('Chanchito triste :(');
        break;
    default:
        console.log('No hay chanchitos :(');
        break;
}

/**
 * For
 * Nos permite iterar hasta que se cumpla una condición.
 */

// for (let i = 0; i< 10; i++){
//     console.log(i);
// }

 /**
  * Funciones
  * Si a una funcion en javascript no le asignamos un valor
  * de retorno, va a regresar "undefined".
  */

//  function iterar(arg1){
    
//     for (let i = 0; i< arg1.length; i++){
//         console.log(arg1[i]);
//      }
//  }

//  const numeros = [1,2,'Hola',4,5];
//  const nombres = ['Pedro','Juan','Felipe','Chanchito feliz','Chanchito triste'];
//  iterar(numeros);
//  iterar(nombres);

function sumar(a,b){
    return a + b;
}

// const resultadoSuma1 = sumar(1,2);
// const resultadoSuma2 = sumar(5,6);
// const resultadoSuma3 = sumar(resultadoSuma1,resultadoSuma2)
// console.log("resultado suma:",resultadoSuma3);

/**
 *CallBack:
 *  Una función que se va a ejecutar al final de una función
*/

function sumarCB(a,b,cb){
   const result = a+b;
    cb(result);
}

function callBack(result){
   console.log("Resultado:",result);
}

/*
La función que pasamos como argumento (callBack)no lleva 
parentesis debido a que si los indicamos, se va a ejecutar 
ahi mismo y no al final*/
sumarCB(2,3,callBack);

/**Fat Arrow Function:
 * Tienen 2 beneficios, no usa la palabra reservada function
 * en la declaración.
 * Si es de una sola linea podemos omitir la palabra return
 * y tambien los parentesis.
 */

const miFatArrowFunction = (a,b) => a + b;
// const w = miFatArrowFunction(5,5);
// console.log(w);
const otraFAF = (a,b) =>{
return a+b;
}

const z = otraFAF(4,4);
console.log(z);

/**Funciones anonimas:
 * No tiene nombre, se usan por ejemplo en callback
 * no permite reutilizar código.
 */

sumarCB(2,3,function(r){
    console.log('Soy una función anonima y mi resultado es:',r);
});