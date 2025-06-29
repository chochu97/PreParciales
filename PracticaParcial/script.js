
// Dos funciones principales: validarCoordenadas y calcularDistancia

window.addEventListener("DOMContentLoaded", function() {

    const select = document.getElementById("dimensiones");
    const calcularBtn = document.getElementById("calcular");

    select.addEventListener("change", mostrarOcultarZ); // usamos la funcion
    calcularBtn.addEventListener("click", calcularDistancia); // usamos la funcion

    mostrarOcultarZ();

    function mostrarOcultarZ(){  // funcion que valida si dimension es 2 o 3, y si es 3 muestra los campos Z

    const dimension = document.getElementById("dimensiones").value;
    const mostrar = dimension === "3"; // Si la dimension es 3, mostramos los campos Z

    document.getElementById("comaZ1").style.display = mostrar ? "inline" : "none";
    document.getElementById("comaZ2").style.display = mostrar ? "inline" : "none";
    document.getElementById("za").style.display = mostrar ? "inline" : "none";
    document.getElementById("zb").style.display = mostrar ? "inline" : "none";
}

function validarCoordenadas(coords) { // validar los datos ingresados.

    for(const valor of coords){
        if(valor === undefined || valor === "" || valor === null || isNaN(valor)){
            return "Debe ingresar un valor numerico para cada coordenada";
        }
        if(parseFloat(valor) <= 0){
            return "Debe ingresar coordenadas mayores a 0";
        }
    }
    return null; // Si todos los valores son válidos, retornamos null
}

function calcularDistancia(){  // funcion que en realidad obtiene todos los numeros
    
    let dimension = document.getElementById("dimensiones").value;

    let XA, YA, XB, YB, ZA, ZB;

    XA = document.getElementById("xa").value;
    YA = document.getElementById("ya").value;

    XB = document.getElementById("xb").value;
    YB = document.getElementById("yb").value;

    coords = [XA, YA, XB, YB]; // Inicializamos un array con las coordenadas

    if(dimension === "3"){ 

        ZA = document.getElementById("za").value;
        ZB = document.getElementById("zb").value;

        coords.push(ZA, ZB);
    }

    const mensajeError = validarCoordenadas(coords);

    if(mensajeError){
        
        document.getElementById("resultado").textContent = mensajeError;
        document.getElementById("resultado").style.color = "red";
        return; // Si hay un error, no continuar con el cálculo
    }

    // Lo de recien fue usar la funcion para validar que todos los datos ingresados sean correctos
    // Ahora convertimos los datos a numeros y calculamos la distancia dependiendo de la dimension

    const x1 = parseFloat(XA), 
        y1 = parseFloat(YA),
        x2 = parseFloat(XB),
        y2 = parseFloat(YB);

    let distancia;

    if(dimension === "2"){
        distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    }
    else{
        const z1 = parseFloat(ZA),
            z2 = parseFloat(ZB)

        distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
    }

    alert("La distancia entre los puntos A y B es: " + distancia.toFixed(3));
    

    }
});

