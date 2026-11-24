// Seleccionamos los botones y los artículos
const botones = document.querySelectorAll("#filtros button");
const articulos = document.querySelectorAll("#entradas article");

// Recorremos los botones
botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const categoria = boton.dataset.category;
        // Eliminamos la clase activo de todos los botones
        botones.forEach(function (b) {
            b.classList.remove("activo");
        });

        // Activamos el botón seleccionado
        boton.classList.add("activo");

        // Recorremos los artículos
        articulos.forEach(function (articulo) {

            if (categoria === "todas" || articulo.dataset.category === categoria) {
                articulo.hidden = false;
            } else {
                articulo.hidden = true;
            }

        });

    });

});