$(document).ready(function () {
    // 1. Clic en el Botón 1: Aumentar tamaño del título
    $('#boton1').click(function () {
        const titulo = $('.titulo');
        let currentSize = parseInt(titulo.css('font-size'));
        titulo.css('font-size', (currentSize + 5) + 'px');
        boton1Clicked = true;
        checkBoton1Y2();
    });

    // 2. Pase del ratón sobre el Botón 2: Resaltar equipo FC Barcelona
    $('#boton2').hover(
        function () {
            $('#barcelona').addClass('highlight');
        },
        
        function () {
            $('#barcelona').removeClass('highlight');
        }
    ).click(function () {
        boton2Clicked = true;
        checkBoton1Y2();
    });

    // 3. Doble clic en el Botón 3: Ocultar fila Atlético de Madrid
    $('#boton3').dblclick(function () {
        $('#clasificacion table tr').each(function () {
            if ($(this).text().includes('Atlético de Madrid')) {
                $(this).hide();
            }
        });
    });

    // 4. Clic en el Botón 4: Desvanecer noticias
    $('#boton4').click(function () {
        $('.noticia').fadeOut(1000);
    });

    // 5. Mouse enter/leave en descripción de la liga
    $('.descripcion').hover(
        function () {
            $(this).css('font-weight', 'bold');
        },
        function () {
            $(this).css('font-weight', 'normal');
        }
    );

    // 6. Clic en título del equipo: alertar el nombre
    $('.nombre-equipo').click(function () {
        alert($(this).text());
    });

    // 7. Doble clic en encabezado (th): agregar borde rojo a celdas (td)
    $('th').dblclick(function () {
        $(this).closest('table').find('td').css('border', '2px solid red');
    });

    // 8. Mouse enter en título de noticias: subrayado
    $('.titulo-noticia').hover(
        function () {
            $(this).css('text-decoration', 'underline');
        },
        function () {
            $(this).css('text-decoration', 'none');
        }
    );

    // 9. Clic en Botón 1 + Botón 2: cambiar color del texto en la tabla
    let boton1Clicked = false;
    let boton2Clicked = false;

    function checkBoton1Y2() {
        if (boton1Clicked && boton2Clicked) {
            $('#clasificacion td').css('color', 'green');
        }
    }

    // 10. Al cargar: ocultar Real Madrid y mostrar botón
    $('#real-madrid').hide();
    $('body').append('<button id="mostrar-real-madrid">Mostrar Real Madrid</button>');

    $('#mostrar-real-madrid').click(function () {
        $('#real-madrid').show();
    });

    //11. prepend()

$("#objetivo").prepend("Hola <strong>buenas</strong> tardes");
//Qué hace: Inserta al inicio del contenido de #objetivo. Resultado →
//Hola buenas tardesContenido original del div #objetivo

//12. after()

$("#objetivo").after("Hola <strong>buenas</strong> tardes");
//Qué hace: Agrega el contenido justo después del elemento #objetivo, fuera de él.

// 13. remove()

$("#objetivo").remove();
//Qué hace: Elimina por completo el elemento con id objetivo del DOM.

// 14. empty() (corrección: faltaba #)

$("#objetivo").empty();
//Qué hace: Borra todo lo que está dentro de #objetivo, pero no elimina el contenedor.

//15. addClass() (corrección: faltaba #)

$("#objetivo").addClass("clase-css");
//Qué hace: Añade una clase CSS al elemento #objetivo.
// Asegúrate de definir .clase-css en tu CSS, por ejemplo:


.clase-css {
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
}
// 16. removeClass() (corrección: faltaba #)

$("#objetivo").removeClass("clase-css");
//Qué hace: Elimina la clase "clase-css" del elemento #objetivo.

// 17. toggleClass() (corrección: faltaba #)

$("#objetivo").toggleClass("clase-css");
//Qué hace: Si el elemento tiene la clase, la quita; si no la tiene, la agrega (ideal para alternar).

// 18. .css({...}) (corrección: faltaba #)

$("#objetivo").css({
    "color": "white",
    "background-color": "black",
    "font-size": "20px"
});
//Qué hace: Aplica varios estilos CSS directamente al elemento.

// 19. hide()

$("#objetivo").hide();
//Qué hace: Oculta el elemento sin animación.

//20. Evento click

$("#boton1").click(function () {
    console.log("¡Clic en botón 1!");
});
Qué hace: Ejecuta la función cuando se hace clic en #boton1. Aquí imprime en consola como ejemplo.

// 21. Evento mouseenter

$("#objetivo").mouseenter(function () {
    console.log("El mouse entró en #objetivo");
});
//Qué hace: Ejecuta cuando el cursor entra en el área de #objetivo.

// 22. Evento mouseleave
js
Copiar
Editar
$("#objetivo").mouseleave(function () {
    console.log("El mouse salió de #objetivo");
});
//Qué hace: Ejecuta cuando el cursor sale del área de #objetivo.


});