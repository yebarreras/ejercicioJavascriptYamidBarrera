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
            realizada: false
        },
        {
            id: 2,
            titulo: "Nota 2",
            texto: "Texto de la nota 2",
            realizada: true
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
            realizada: true
        },
        {
            id: 5,
            titulo: "Nota 5",
            texto: "Texto de la nota 5",
            realizada: false
        }
    ];

    let idGlobal = notas.length;

    function pintarTarjetas() {
        if (notas.length === 0) {
            let contenedorVacio = document.getElementById("contenedor");
            contenedorVacio.innerHTML = "<p>NO HAY NOTAS PARA MOSTRAR</p>";
            return
        }
        for (let i = 0; i < notas.length; i++) {
            let contenedor = document.getElementById("contenedor");
            let tarjeta = document.createElement("div");
            contenedor.appendChild(tarjeta);
            tarjeta.classList.add("carta");
            let titulo = document.createElement("h2");
            tarjeta.appendChild(titulo);
            titulo.classList.add("textos");
            titulo.innerText = notas[i].titulo;
            let texto = document.createElement("p");
            tarjeta.appendChild(texto);
            texto.classList.add("textos");
            texto.innerText = notas[i].texto;
            let id = document.createElement("p");
            tarjeta.appendChild(id);
            id.classList.add("textos");
            id.innerText = "id: " + notas[i].id;
            let checkbox = document.createElement("input");
            tarjeta.appendChild(checkbox);
            checkbox.type = "checkbox";
            checkbox.checked = notas[i].realizada;
            checkbox.addEventListener("click", () => marcarRealizada(notas[i].id));
            let borrarNota = document.createElement("button");
            tarjeta.appendChild(borrarNota);
            borrarNota.classList.add("btn", "btn-outline-danger", "btn-sm");
            borrarNota.innerText = "Eliminar";
            borrarNota.addEventListener("click", () => borrando(notas[i].id));
        }

        function borrando(id) {
            console.log('Borrando nota con id:', id);
            let indice = notas.findIndex((objeto) => objeto.id === id);
            notas.splice(indice, 1);
            notas.forEach((objeto, indice) => {
                objeto.id = indice + 1
            })
            let limpiarContenedor = document.getElementById("contenedor");
            limpiarContenedor.innerHTML = "";
            pintarTarjetas();
        }

        function marcarRealizada(id) {
            let indice = notas.findIndex((objeto) => objeto.id === id);
            notas[indice].realizada = !notas[indice].realizada;
            let limpiarContenedor = document.getElementById("contenedor");
            limpiarContenedor.innerHTML = "";
            pintarTarjetas();
            console.log(notas);
            return
        }
    }

    pintarTarjetas();

    function nuevaNota() {
        let inputTitulo = document.getElementById("titulo").value;
        let inputTexto = document.querySelector("textarea").value;
        if (inputTitulo == "" || inputTexto == "") {
            alert("Por favor, rellene todos los campos");
            return false;
        }
        function agregarNota() {
            document.getElementById("titulo").value = "";
            document.querySelector("textarea").value = "";
            let nota = {
                id: idGlobal + 1,
                titulo: inputTitulo,
                texto: inputTexto,
                realizada: false
            }
            let limpiarContenedor = document.getElementById("contenedor");
            limpiarContenedor.innerHTML = "";
            notas.push(nota);
            notas.forEach((objeto, indice) => {
                objeto.id = indice + 1
            })
            pintarTarjetas();
            return;
        }
        agregarNota();
    }
    document.getElementById('guardar').addEventListener('click', nuevaNota);

    document.getElementById("switch").addEventListener("click", () => {
        filtroRealizadas(notas);
        console.log();
    })

    function filtroRealizadas(notas) {
        let notasFiltradas = notas.filter((elemento) => elemento.realizada === true);
        let limpiarContenedor = document.getElementById("contenedor");
        limpiarContenedor.innerHTML = "";
        notas.forEach((objeto, indice) => {
            objeto.id = indice + 1
        })
        pintarTarjetas(notasFiltradas);
    }

})