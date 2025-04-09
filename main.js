$(document).ready(function () {
    // 1 - Aumentar tamaño del título 5px
    $("#boton1").click(function () {
        let actual = parseInt($(".titulo").css("font-size"));
        $(".titulo").css("font-size", (actual + 5) + "px");
        $("#resultados").html("Ejercicio 1: Se aumentó el tamaño del título en 5px.");
    });

    // 2 - Resaltar Barcelona al pasar ratón sobre boton2
    $("#boton2").on("mouseenter", function () {
        $("#barcelona").addClass("highlight");
        $("#resultados").html("Ejercicio 2: Se resaltó el equipo Barcelona.");
    }).on("mouseleave", function () {
        $("#barcelona").removeClass("highlight");
        $("#resultados").html("Ejercicio 2: Se quitó el resaltado de Barcelona.");
    });

    // 3 - Ocultar fila de Atlético de Madrid
    $("#boton3").on("dblclick", function () {
        $("#clasificacion table tr").filter(function () {
            return $(this).text().includes("Atlético de Madrid");
        }).hide();
        $("#resultados").html("Ejercicio 3: Se ocultó la fila de Atlético de Madrid.");
    });

    // 4 - Desvanecer noticias
    $("#boton4").click(function () {
        $(".noticia").fadeOut(1000);
        $("#resultados").html("Ejercicio 4: Se desvanecieron las noticias.");
    });

    // === Manipulación ===

    // 11 - prepend
    $("#btn11").click(function () {
        $("#objetivo").prepend("Hola <strong>buenas</strong> tardes ");
        $("#resultados").html("Ejercicio 11: Se añadió contenido al principio.");
    });

    // 12 - after
    $("#btn12").click(function () {
        $("#objetivo").after("Hola <strong>buenas</strong> tardes ");
        $("#resultados").html("Ejercicio 12: Se añadió contenido después.");
    });

    // 13 - remove
    $("#btn13").click(function () {
        $("#objetivo").remove();
        $("#resultados").html("Ejercicio 13: Se eliminó el div #objetivo.");
    });

    // 14 - empty
    $("#btn14").click(function () {
        $("#objetivo").empty();
        $("#resultados").html("Ejercicio 14: Se vació el contenido del div #objetivo.");
    });

    // 15 - addClass
    $("#btn15").click(function () {
        $("#objetivo").addClass("clase-css");
        $("#resultados").html("Ejercicio 15: Se añadió la clase CSS.");
    });

    // 16 - removeClass
    $("#btn16").click(function () {
        $("#objetivo").removeClass("clase-css");
        $("#resultados").html("Ejercicio 16: Se eliminó la clase CSS.");
    });

    // 17 - toggleClass
    $("#btn17").click(function () {
        $("#objetivo").toggleClass("clase-css");
        $("#resultados").html("Ejercicio 17: Se alternó la clase CSS.");
    });

    // 18 - css
    $("#btn18").click(function () {
        $("#objetivo").css({
            "color": "white",
            "background-color": "black",
            "font-size": "20px"
        });
        $("#resultados").html("Ejercicio 18: Se aplicaron estilos CSS al div #objetivo.");
    });

    // 19 - hide
    $("#btn19").click(function () {
        $("#objetivo").hide();
        $("#resultados").html("Ejercicio 19: Se ocultó el div #objetivo.");
    });

    // 20 - click
    $("#btn20").click(function () {
        alert("Has hecho clic en el botón 20");
        $("#resultados").html("Ejercicio 20: Se ejecutó el clic del botón 20.");
    });

    // === Ejercicios de animación ===

    // 23 - fadeIn Real Madrid
    $("#btn23").click(function () {
        $("#real-madrid").fadeIn(1000);
        $("#resultados").html("Ejercicio 23: Se mostró Real Madrid con efecto de fundido.");
    });

    // 24 - fadeOut Barcelona
    $("#btn24").click(function () {
        $("#barcelona").fadeOut(1000);
        $("#resultados").html("Ejercicio 24: Se ocultó Barcelona con efecto de fundido.");
    });
});