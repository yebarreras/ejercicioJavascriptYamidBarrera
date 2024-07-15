const formulario = document.forms[0]

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(e.target);
    //console.log(e);
    //console.log("evento calcular");
    const estatura = e.target[0].value
    console.log(estatura);
    const peso = e.target[1].value
    console.log(peso);
    let imc = peso / ((estatura / 100) * (estatura / 100))
    imc = imc.toFixed(1)    
    console.log(imc);
    document.getElementById("Resultado").value = imc
})