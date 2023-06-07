

const equipoDAnombres = ["maria","carlos","luis","victor","sonia","david","nafisa","leolito","javi","cesar"];
const equipoDAnumeros = [1,2,3,4,5,6,7,8,9,10]
console.log(equipoDAnombres.equipoDAnumeros);


for ( let i = 0; i < equipoDAnombres.length; i++){
     
    const element = equipoDAnombres[i];
    console.log(element); 
}
//Crear una función que añada un número al array//
let nuevaLongitud = equipoDAnumeros.push(20)

//Crear una función que elimine los números pares de ese array.//
let array = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];
let i=1;

for(let i= 0;i<array.length;i++){
    if(array[i] % 2 ==0){
        array.splice(i,1);
    }
}

console.log(array);
console.log("Los numeros impares son " + impares);

//Crear una función que devuelva el número mayor de un array.//

function maximo(equipoDAnumeros) {
    if (toString.call(equipoDAnumeros) !== "[0bject array]") {
        return null;
    }
    if (!equipoDAnumeros.every(e=> typeof e == "number")) {
        return null;
    }
    return Math.max.apply(null, equipoDAnumeros);
}

console.log(maximo([1,2,3,4,5,6,7,8,9,10]))

//Crear una función que devuelva el número menor de un array//

function minimo(equipoDAnumeros) {
    if (toString.call(equipoDAnumeros) !== "[0bject array]") {
        return null;
    }
    if (!equipoDAnumeros.every(e=minimo  == "number")) {
        return null;
    }
    return Math.min.apply(null, equipoDAnumeros);
}

console.log(minimo([1,2,3,4,5,6,7,8,9,10]))

//Crear un función que convierta en minúsculas todas las letras de un texto//

function minúsculas(sequipoDAnombres){
    let resultado = "";

    for(let i = 0; i < equipoDAnombres.length; i++) {
        if(i % 2 == 0){
            resultado += equipoDAnombres[i].tolowerCase();
        }else {
            resultado += equipoDAnombres[i].toUpperCase();
        }
    }return resultado;
}

console.log(tolowerCase.toUpperCase(["maria","carlos","luis","victor","sonia","david","nafisa","leolito","javi","cesar"]))


//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula//

let listaDeUsuarios
 
// function primeraLetra(sequipoDAnombres){
//         return str[0].toUpperCase() + str.slice(1);
//     }
   
//    console.log(primeraLetra('h"maria","carlos","luis","victor","sonia","david","nafisa","leolito","javi","cesar"));
