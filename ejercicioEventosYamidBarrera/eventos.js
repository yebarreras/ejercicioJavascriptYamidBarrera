/*document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.forms[0]

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const estatura = e.target[0].value
        console.log(estatura);
        const peso = e.target[1].value
        console.log(peso);
        let imc = peso / ((estatura / 100) * (estatura / 100))
        imc = imc.toFixed(1)
        console.log(imc);
        document.getElementById("Resultado").value = imc
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let selectMonedaOrigen = document.getElementById("monedaOrigen");
    let inputCantidadOrigen = document.getElementById("cantidadOrigen");
    let selectMonedaDestino = document.getElementById("monedaDestino");
    let inputCantidadDestino = document.getElementById("cantidadDestino");

    let tasasDeCambio = {
        "USD": {
            "USD": 1,
            "ARS": 922,
            "EUR": 0.92,
            "GBP": 0.75,
            "COP": 4290,
            "MXN": 19.34,
            "BRL": 5.31
        },
        "ARS": {
            "USD": 0.0071,
            "ARS": 1,
            "EUR": 0.0061,
            "GBP": 0.0054,
            "COP": 4.27,
            "MXN": 0.019,
            "BRL": 0.0059
        },
        "EUR": {
            "USD": 1.18,
            "ARS": 164.71,
            "EUR": 1,
            "GBP": 0.88,
            "COP": 4280,
            "MXN": 20.28,
            "BRL": 5.63
        },
        "GBP": {
            "USD": 1.34,
            "ARS": 187.64,
            "EUR": 1.14,
            "GBP": 1,
            "COP": 4980,
            "MXN": 22.39,
            "BRL": 6.01
        },
        "COP": {
            "USD": 0.00024,
            "ARS": 0.32,
            "EUR": 0.00022,
            "GBP": 0.00019,
            "COP": 1,
            "MXN": 0.0042,
            "BRL": 0.00021
        },
        "MXN": {
            "USD": 0.057,
            "ARS": 7.48,
            "EUR": 0.052,
            "GBP": 0.042,
            "COP": 172,
            "MXN": 1,
            "BRL": 0.26
        },
        "BRL": {
            "USD": 0.18,
            "ARS": 22.5,
            "EUR": 0.17,
            "GBP": 0.13,
            "COP": 570,
            "MXN": 1.75,
            "BRL": 1
        }
    };

    function convertirOrigenADestino() {
        let monedaOrigen = selectMonedaOrigen.value;
        let monedaDestino = selectMonedaDestino.value;
        let cantidadOrigen = parseFloat(inputCantidadOrigen.value);

        if (!isNaN(cantidadOrigen) && tasasDeCambio[monedaOrigen] && tasasDeCambio[monedaOrigen][monedaDestino]) {
            let tasa = tasasDeCambio[monedaOrigen][monedaDestino];
            let cantidadDestino = cantidadOrigen * tasa;
            inputCantidadDestino.value = cantidadDestino.toFixed(2);
        } else {
            inputCantidadDestino.value = "";
        }
    }

    function convertirDestinoAOrigen() {
        let monedaOrigen = selectMonedaOrigen.value;
        let monedaDestino = selectMonedaDestino.value;
        let cantidadDestino = parseFloat(inputCantidadDestino.value);

        if (!isNaN(cantidadDestino) && tasasDeCambio[monedaDestino] && tasasDeCambio[monedaDestino][monedaOrigen]) {
            let tasa = tasasDeCambio[monedaDestino][monedaOrigen];
            let cantidadOrigen = cantidadDestino * tasa;
            inputCantidadOrigen.value = cantidadOrigen.toFixed(2);
        } else {
            inputCantidadOrigen.value = "";
        }
    }

    convertirOrigenADestino();

    inputCantidadOrigen.addEventListener("input", convertirOrigenADestino);
    inputCantidadDestino.addEventListener("input", convertirDestinoAOrigen);
    selectMonedaOrigen.addEventListener("change", convertirOrigenADestino);
    selectMonedaDestino.addEventListener("change", convertirOrigenADestino);
});*/

document.addEventListener("DOMContentLoaded", function () {

    let notas = [
        {
            id: 1,
            titulo: "Nota 1",
            texto: "Texto de la nota 1",
            realizada: true
        },
        {
            id: 2,
            titulo: "Nota 2",
            texto: "Texto de la nota 2",
            realizada: false
        },
        {
            id: 3,
            titulo: "Nota 3",
            texto: "Texto de la nota 3",
            realizada: false
        },
        {
            id: 4,
            titulo: "Nota 4",
            texto: "Texto de la nota 4",
            realizada: false
        },
        {
            id: 5,
            titulo: "Nota 5",
            texto: "Texto de la nota 5",
            realizada: false
        }
    ];

    let idGlobal = notas.length;

    function pintarTarjetas(notas) {
        for (let i = 0; i < notas.length; i++) {
            let contenedor = document.getElementById("contenedor");
            let tarjeta = document.createElement("div");
            contenedor.appendChild(tarjeta);
            tarjeta.classList.add("card");
            let titulo = document.createElement("h2");
            tarjeta.appendChild(titulo);
            titulo.innerText = notas[i].titulo;
            let texto = document.createElement("p");
            tarjeta.appendChild(texto);
            texto.classList.add("h2");
            texto.innerText = notas[i].texto;
        }
        return contenedor
    }
    pintarTarjetas(notas);

    function nuevaNota() {
        let inputTitulo = document.getElementById("titulo").value;
        let inputTexto = document.querySelector("textarea").value;
        if (inputTitulo == "" || inputTexto == "") {
            alert("Por favor, rellene todos los campos");
            return;
        }
        let limpiar = document.getElementById("contenedor");
        limpiar.innerHTML = "";
        let nota = {
            id: idGlobal + 1,
            titulo: inputTitulo,
            texto: inputTexto,
            realizada: false
        }
        return notas.push(nota);
    }
    function agregarNota() {
        nuevaNota();
        pintarTarjetas(notas);
    }
    document.getElementById('guardar').addEventListener('click', agregarNota);
})