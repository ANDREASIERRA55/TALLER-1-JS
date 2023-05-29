function saludar(nombre){

    let saludo = "hola" + " " + nombre;
    let div = document.querySelector("div");
    div.innerHTML = saludo;
    return saludo;
    
}

let resultado = saludar("Andrea");
console.log(resultado);

function suma(a,b){
    let resultado = a + b;
    return resultado;
}

let resultado2 = suma(5, 30);
console.log(resultado2);

function booleano(d,c){
    if ((d+c) == 35) {
        console.log("es igual")
    }else{
        console.log("no es igual");
    }

}

booleano(10,25)

let numero;
numero = prompt("introducir numero")
if(numero %2 ==0){
    document.write("El numero " + numero + "es par");
}else{
    document.write("El numero " + numero + "es Impar");
}



