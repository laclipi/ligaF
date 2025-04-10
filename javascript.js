//PROBAR aqui los dif scripts para visualizar resultados, 


$("#boton3").on("dblclick", function () {
    $("#clasificacion table tr").filter(function () {
        return $(this).text().includes("Atlético de Madrid");
    }).hide();
    $("#resultados").html("Ejercicio 3: Se ocultó la fila de Atlético de Madrid.");
});
