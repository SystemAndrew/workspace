function positivo(){
    const numero = document.getElementById("numero");
    const numeroInt = parseInt(numero.value);

    if(numeroInt >=0 ){
        alert("El numero es positivo");

    }else{
        alert("El numero es negativo");
    }
}

function esPar(){
    const numero = document.getElementById("par");
    const numeroInt = parseInt(numero.value);

    if(numeroInt %2 == 0 ){
        alert("El numero es Par");

    }else{
        alert("El numero es Impar");
    }
}