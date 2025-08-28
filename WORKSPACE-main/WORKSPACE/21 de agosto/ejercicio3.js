let almacenamiento = []
function mostrar (){
    const elementos = document.getElementById("mostar");
    elementos.innerHTML =""
    almacenamiento.forEach ((elemento) => {
        const ele = document.createElement("h1");
        ele.innerHTML= elemento;
        elementos.appenChild(ele);

    })
}

function almacenar (){
   const dato = document.getElementById("texto");
   almacenamiento.push (dato.value);
   dato.value = ""
   mostrar();
}
    

