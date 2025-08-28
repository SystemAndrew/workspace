function suma (){
    const elemento1 = document.getElementById("suma1");
    const elemento2 = document.getElementById("suma2");
    const resultado = document.getElementById("resultadosuma");
    resultado.innerHTML = parseInt(elemento1.value) + parseInt(elemento2.value)
}

function multiplicacion (){
    const elemento1 = document.getElementById("multiplicacion1");
    const elemento2 = document.getElementById("multiplicacion2");
    const resultado = document.getElementById("resultadomultiplicacion");
    resultado.innerHTML = parseInt(elemento1.value) * parseInt(elemento2.value)
}

function resta (){
    const elemento1 = document.getElementById("resta1");
    const elemento2 = document.getElementById("resta2");
    const resultado = document.getElementById("resultadoresta");
    resultado.innerHTML = parseInt(elemento1.value) - parseInt(elemento2.value)
}

function division (){
    const elemento1 = document.getElementById("division1");
    const elemento2 = document.getElementById("division2");
    const resultado = document.getElementById("resultadodivision");
    resultado.innerHTML = parseInt(elemento1.value) / parseInt(elemento2.value)
}
