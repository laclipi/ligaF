/*1. $(“#objetivo”).fadeTo(duracion, opacidad);
Aplica un efecto de desvanecimiento al elemento con id objetivo, cambiando su opacidad a un nivel específico. duracion es el tiempo en milisegundos que tomará el efecto, y opacidad es un valor entre 0 (completamente transparente) y 1 (completamente opaco).

2. $(“#objetivo”).fadeToggle();
Alterna el estado de visibilidad del elemento con id objetivo entre desvanecerse y aparecer.

3. $(“#objetivo”).slideToggle();
Alterna el estado de visibilidad del elemento con id objetivo haciendo un efecto de deslizamiento hacia arriba o abajo.

4. $("#objetivo").toggle();
Muestra o oculta el elemento con id objetivo de forma alterna, similar a fadeToggle() o slideToggle(), pero sin efectos de desvanecimiento o deslizamiento.

5. $(“#objetivo”).offset();
Devuelve la posición de un elemento en relación con el documento. Retorna un objeto con propiedades top y left.

6. $(“#objetivo”).position();
Devuelve la posición de un elemento en relación con su padre. Incluye propiedades top y left.

7. $(“#objetivo”).focus();
Establece el foco en el elemento con id objetivo, lo que es útil para campos de entrada.

8. $(“#objetivo”).blur();
Quita el foco del elemento con id objetivo.

9. $(“#objetivo”).promise().done(function(){});
Ejecuta una función una vez que se han completado todas las animaciones en el elemento con id objetivo.

10. $(document).ready(function(){});
Ejecuta una función cuando el documento HTML está completamente cargado y el DOM está listo para ser manipulado.

11. $("#objetivo").clone();
Crea una copia del elemento con id objetivo, pero no lo agrega al DOM.

12. $("#objetivo").each(function(){});
Itera sobre cada elemento en el conjunto de jQuery, permitiendo realizar acciones sobre cada uno de los elementos.

13. $("#objetivo").children();
Obtiene todos los elementos hijos del elemento con id objetivo.

14. $("#objetivo").parent();
Obtiene el elemento padre del elemento con id objetivo.

15. $("#objetivo").siblings();
Obtiene todos los elementos hermanos del elemento con id objetivo.

16. $("#objetivo").wrap("<div></div>");
Envuelve el elemento con id objetivo dentro de un nuevo elemento <div>.

17. $("#objetivo").detach();
Elimina el elemento con id objetivo del DOM, pero mantiene su datos y eventos así se puede reinsertar más tarde.