//probar aqui los dif scripts para visualizar resultados, ejemplo ejercicio 2
$(document).ready(function () {

    $("#liga").mouseenter(function(){
        $("#barcelona").addClass("highlight");
        $("#resultados").html("Ejercicio 2: Se resaltó el equipo Barcelona.");
    });

    $("#liga").mouseleave(function(){
        $("#barcelona").removeClass("highlight");
        $("#resultados").html("Ejercicio 2: Se quitó el resaltado de Barcelona.");
    });
});
