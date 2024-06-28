/*console.log("Ejercicio 1");
let numero = +prompt("Ingresa un numero");
for (i = 0; i <= 10; i++) {
    console.log(numero * i);
}

console.log("Ejercicio 2");
let i = +prompt("Ingresa un numero");
let acumulador = 0;
while (i !== 0) {
    acumulador = acumulador + i;
    i = +prompt("Ingresa un numero");
}
console.log(acumulador);

console.log("Ejercicio 3");
let aleatorio = Math.floor(Math.random() * 100);
let intentos = 1;
let numero = +prompt("Ingresa un numero");

while (numero !== aleatorio) {
    intentos++;
    if (aleatorio < numero) {
        numero = +prompt("El numero es mayor, Ingresa un nuevo numero");
    } else if (aleatorio > numero) {
        numero = +prompt("El numero es menor, Ingresa un nuevo numero");
    } else if (aleatorio === numero) {
        console.log("Ganaste, haz adivinado el numero");
    }
}

console.log("Felicidades, has adivinado el numero. Numero de intentos: " + intentos);
console.log("El numero era: " + aleatorio);

console.log("Ejercicio 4");
let numero = +prompt("Ingresa un numero");
console.log("El numero ingresado es, " + numero + " ¿Es un numero primo?");

function esPrimo(parametro) {
    if (parametro <= 1) {
        return false;
    }
    for (let i = 2; i < parametro; i++) {
        if (parametro % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(numero))

console.log("Ejercicio 5");
let numero = +prompt("Ingresa un numero");
console.log("El numero ingresado es " + numero + ", y sus divisores son: ");

function esDivisor(parametro) {
    for (let i = 1; i <= parametro; i++) {
        if (parametro % i === 0) {
            console.log(i);
        }
    }
}

esDivisor(numero)

console.log("Ejercicio 6");
let arreglo = ["manzana", "banana", "pera", "naranja", "kiwi", "mango", "uva", "piña", "sandia", "mora"];
console.log(arreglo);

for (let elemento of arreglo) {
    console.log("El elemento numero " + (arreglo.indexOf(elemento) + 1) + " es: " + elemento);
}

console.log("Ejercicio 7");
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arreglo.length; i++) {
    let doble = arreglo[i] * 2;
    console.log("El doble de " + arreglo[i] + " es: " + doble);
}

console.log("Ejercicio 8");
let barreraHuertas = [{ "nombre": "Yamid", "rol": "padre", "edad": 30, "estatura": 170, "profesion": "Ingeniero civil" }, { "nombre": "Andrea", "rol": "madre", "edad": 30, "estatura": 165, "profesion": "Ingeniera quimica" }, { "nombre": "Emily", "rol": "hija", "edad": 9, "estatura": 130, "profesion": "Estudiante" }, { "nombre": "Bebe", "rol": "bebe", "edad": 0, "estatura": 30, "profesion": "Bebe" }];
console.log(barreraHuertas);

for (let elemento of barreraHuertas) {
    console.log("Hola mi nombre es: " + elemento.nombre + ", mi rol es: " + elemento.rol + ", mi edad es: " + elemento.edad + ", mi estatura es: " + elemento.estatura + ", y mi profesion es: " + elemento.profesion);
}

console.log("Ejercicio 9");
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arreglo);

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 !== 0) {
        console.log(arreglo[i]);
    }
}

console.log("Ejercicio 10");
function sumarNumeros() {
    let sumaPares = 0;
    let sumaImpares = 0;

    while (true) {
        let numero = parseInt(prompt("Ingresa un numero, (si ingresas 0, se detendra el programa)"));
        if (numero === 0) {
            break;
        }
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }
    console.log("Suma de pares: " + sumaPares);
    console.log("Suma de impares: " + sumaImpares);
}
sumarNumeros()

console.log("Ejercicio 11");
let arreglo = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = 0;
console.log(arreglo);

function encontrarMaximo() {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}
console.log(encontrarMaximo())

console.log("Ejercicio 12");
let arreglo = [500, 600, 800, 66, 45, 67, 200, 400, 888, 9]
let minimo = arreglo[5]
console.log(arreglo);

function encontrarMinimo() {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i];
        }
    }
    return minimo;
}
console.log(encontrarMinimo())

console.log("Ejercicio 13");
let jugador1 = prompt("Ingresa tu nombre para jugar")
let jugador2 = prompt("Ingresa tu nombre para jugar")
console.log("jugador1: " + jugador1);
console.log("jugador2: " + jugador2);

function piedraPapelTijera() {
    while (true) {

        let manoJugador1 = prompt(jugador1 + ", Escoge una opcion para jugar (piedra/papel/tijera)")
        let manoJugador2 = prompt(jugador2 + ", Escoge una opcion para jugar (piedra/papel/tijera)")
        console.log(jugador1 + ": " + manoJugador1);
        console.log(jugador2 + ": " + manoJugador2);

        if ((manoJugador1 === "piedra" && manoJugador2 === "tijera") || (manoJugador1 === "papel" && manoJugador2 === "piedra") || (manoJugador1 === "tijera" && manoJugador2 === "papel")) {
            console.log("Gana " + jugador1)
            break

        } else if ((manoJugador2 === "piedra" && manoJugador1 === "tijera") || (manoJugador2 === "papel" && manoJugador1 === "piedra") || (manoJugador2 === "tijera" && manoJugador1 === "papel")) {
            console.log("Gana " + jugador2)
            break

        } else if (manoJugador1 === manoJugador2) {
            console.log("Empate")
        }
    }
}
piedraPapelTijera()

console.log("Ejercicio 14");
let filas = 5;

for (let i = 1; i <= filas; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }
    console.log(fila);
}

console.log("Ejercicio 15");
let filas = 5;

for (let i = 1; i <= filas; i++) {
    let fila = "";
    for (let j = 5; j >= i; j--) {
        fila += "*";
    }
    console.log(fila);
}

console.log("Ejercicio 16");
let arreglo = [456, 834, -87345, 4756, 926, -88, 87, 8745, 6534, 978]

function ordenarArreglo(arreglo) {

    let parar = true;
    while (parar) {
        parar = false;
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                let cambiar = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = cambiar;
                parar = true;
            }
        }
    }
    return arreglo;
}

console.log(ordenarArreglo(arreglo))*/