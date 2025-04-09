$(document).ready(function () {
    // 10 - Ocultar Real Madrid al cargar
    $("#real-madrid").hide();
    $("<button>Mostrar Real Madrid</button>").insertAfter("#real-madrid").click(function () {
        $("#real-madrid").show();
    });

    // 1 - Aumentar tamaño del título 5px
    $("#boton1").click(function () {
        let actual = parseInt($(".titulo").css("font-size"));
        $(".titulo").css("font-size", (actual + 5) + "px");
        boton1Clicado = true;
        verificarBotonesClicados();
    });

    // 2 - Resaltar Barcelona al pasar ratón sobre boton2
    $("#boton2").on("mouseenter", function () {
        $("#barcelona").addClass("highlight");
    }).on("mouseleave", function () {
        $("#barcelona").removeClass("highlight");
    }).on("click", function () {
        boton2Clicado = true;
        verificarBotonesClicados();
    });

    // 3 - Ocultar fila de Atlético de Madrid
    $("#boton3").on("dblclick", function () {
        $("#clasificacion table tr").filter(function () {
            return $(this).text().includes("Atlético de Madrid");
        }).hide();
    });

    // 4 - Desvanecer noticias
    $("#boton4").click(function () {
        $(".noticia").fadeOut(1000);
    });

    // 5 - Toggle negrita descripción liga
    $(".descripcion").on("mouseenter", function () {
        $(this).css("font-weight", "bold");
    }).on("mouseleave", function () {
        $(this).css("font-weight", "normal");
    });

    // 6 - Alertar nombre del equipo
    $(".nombre-equipo").click(function () {
        alert($(this).text());
    });

    // 7 - Doble clic en th -> borde rojo a td
    $("th").on("dblclick", function () {
        $(this).closest("table").find("td").css("border", "2px solid red");
    });

    // 8 - Subrayar título-noticia
    $(".titulo-noticia").on("mouseenter", function () {
        $(this).css("text-decoration", "underline");
    }).on("mouseleave", function () {
        $(this).css("text-decoration", "none");
    });

    // 9 - Clic en botón1 + botón2 cambia color texto celdas a verde
    let boton1Clicado = false;
    let boton2Clicado = false;

    function verificarBotonesClicados() {
        if (boton1Clicado && boton2Clicado) {
            $("td").css("color", "green");
        }
    }

    // === EJERCICIOS DE MANIPULACIÓN ===

    // 11 - prepend
    $("#btn11").click(function () {
        $("#objetivo").prepend("Hola <strong>buenas</strong> tardes ");
    });

    // 12 - after
    $("#btn12").click(function () {
        $("#objetivo").after("Hola <strong>buenas</strong> tardes ");
    });

    // 13 - remove
    $("#btn13").click(function () {
        $("#objetivo").remove();
    });

    // 14 - empty
    $("#btn14").click(function () {
        $("#objetivo").empty();
    });

    // 15 - addClass
    $("#btn15").click(function () {
        $("#objetivo").addClass("clase-css");
    });

    // 16 - removeClass
    $("#btn16").click(function () {
        $("#objetivo").removeClass("clase-css");
    });

    // 17 - toggleClass
    $("#btn17").click(function () {
        $("#objetivo").toggleClass("clase-css");
    });

    // 18 - css
    $("#btn18").click(function () {
        $("#objetivo").css({
            "color": "white",
            "background-color": "black",
            "font-size": "20px"
        });
    });

    // 19 - hide
    $("#btn19").click(function () {
        $("#objetivo").hide();
    });

    // 20 - click
    $("#btn20").click(function () {
        alert("Has hecho clic en el botón 20");
    });

    // 21 - mouseenter
    $("#btn21").click(function () {
        $("#objetivo").mouseenter(function () {
            alert("Mouse entró en #objetivo");
        });
    });

    // 22 - mouseleave
    $("#btn22").click(function () {
        $("#objetivo").mouseleave(function () {
            alert("Mouse salió de #objetivo");
        });
    });
});