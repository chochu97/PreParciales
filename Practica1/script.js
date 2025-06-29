// tres funciones principales: validar coordenadas ingresadas, calcular pendiente y mostrar ocultar campos.

window.addEventListener("DOMContentLoaded", function() {

    const select = document.getElementById("paralelismo");
    const calcular = document.getElementById("calcular");
    
    select.addEventListener("change", mostrarOcultarCampos); // usamos la funcion
    calcular.addEventListener("click", calcularPendiente); // usamos la funcion

    mostrarOcultarCampos(); // Llamamos a la funcion al cargar la pagina

    function mostrarOcultarCampos(){

        const paralel = document.getElementById("paralelismo").value;
        const mostrar = paralel === "si";

        document.getElementById("texto").style.display = mostrar ? "inline" : "none";
        document.getElementById("c").style.display = mostrar ? "inline" : "none";
        document.getElementById("xc").style.display = mostrar ? "inline" : "none";
        document.getElementById("yc").style.display = mostrar ? "inline" : "none";
        document.getElementById("comaC").style.display = mostrar ? "inline" : "none";
        document.getElementById("finC").style.display = mostrar ? "inline" : "none";

        document.getElementById("d").style.display = mostrar ? "inline" : "none";
        document.getElementById("xd").style.display = mostrar ? "inline" : "none";
        document.getElementById("yd").style.display = mostrar ? "inline" : "none";
        document.getElementById("comaD").style.display = mostrar ? "inline" : "none";
        document.getElementById("finD").style.display = mostrar ? "inline" : "none";

    }
    
    function validarCoordenadas(coords){

        const paralel = document.getElementById("paralelismo").value;
        const mostrar2 = paralel === "si";

        for(const valor of coords){

            if(valor === "" || isNaN(valor)){
                return "Debe ingresar un valor numerico para cada coordenada";
            }

            if(coords[0] === coords[2] ){
                    return "La coordenada X de A no puede ser igual a la coordenada X de B";
                }
            
            if(mostrar2){
                
                if(coords[4] === coords[6]){
                    return "La coordenada X de C no puede ser igual a la coordenada X de D";
                }
            }
        }

        return null;
    }


    function calcularPendiente(){

        let X1, Y1, X2, Y2, X3, Y3, X4, Y4;

        X1 = document.getElementById("xa").value;
        Y1 = document.getElementById("ya").value;
        X2 = document.getElementById("xb").value;
        Y2 = document.getElementById("yb").value;

        let coords = [X1, Y1, X2, Y2];

        const paralel = document.getElementById("paralelismo").value;
        const mostrar3 = paralel === "si";

        if(mostrar3){
            
            X3 = document.getElementById("xc").value;
            Y3 = document.getElementById("yc").value;
            X4 = document.getElementById("xd").value;
            Y4 = document.getElementById("yd").value;

            coords.push(X3, Y3, X4, Y4);
        }

        const mensajeError = validarCoordenadas(coords);

        if(mensajeError){
            alert(mensajeError);
            return;
        }

        let XA = parseFloat(X1);
        let YA = parseFloat(Y1);
        let XB = parseFloat(X2);
        let YB = parseFloat(Y2);

        if(mostrar3){

            let XC = parseFloat(X3);
            let YC = parseFloat(Y3);
            let XD = parseFloat(X4);
            let YD = parseFloat(Y4);    

            let pendienteAB = (YB - YA) / (XB - XA);
            let pendienteCD = (YD - YC) / (XD - XC);

            if(pendienteAB === pendienteCD){
                alert("Las rectas AB y CD son paralelas.");
            }
            else{
                alert("Las rectas AB y CD no son paralelas.");
            }

        }
        else{

            let pendiente = (YB - YA) / (XB - XA);
            alert("La pendiente de la recta AB es: " + pendiente.toFixed(3)); 
             
        }

    }

});