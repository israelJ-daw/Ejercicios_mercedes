const noticiasJSON = [
    {
        "titular": "Noticia 1",
        "resumen": "Resumen de la noticia 1",
        "contenido": "Este es el contenido completo de la noticia 1. Aquí va toda la información detallada que se muestra cuando el usuario hace clic en 'Ver más'."
    },
    {
        "titular": "Noticia 2",
        "resumen": "Resumen de la noticia 2",
        "contenido": "Este es el contenido completo de la noticia 2. Aquí va toda la información detallada que se muestra cuando el usuario hace clic en 'Ver más'."
    },
    {
        "titular": "Noticia 3",
        "resumen": "Resumen de la noticia 3",
        "contenido": "Este es el contenido completo de la noticia 3. Aquí va toda la información detallada que se muestra cuando el usuario hace clic en 'Ver más'."
    }
];

window.addEventListener("load", () => {
    iniciar();
})

function iniciar() {
    var noticias = document.getElementById("noticias");

    noticiasJSON.forEach(item => {
        var div1 = document.createElement("div");
        div1.classList.add("Noticias");

        var titulo = document.createElement("h1");
        titulo.textContent = item.titular;

        var resumen = document.createElement("p");
        resumen.textContent = item.resumen;

        var contenido = document.createElement("p");
        contenido.textContent = item.contenido;
        contenido.style.display = "none";  // El contenido estará oculto al principio.

        // Crear el botón para mostrar/ocultar el contenido
        var boton = document.createElement("button");
        boton.textContent = "Mostrar más";  // Texto inicial del botón

        // Función para manejar el evento de clic en el botón
        boton.addEventListener("click", () => {
            if (contenido.style.display === "none") {
                contenido.style.display = "block";  // Mostrar el contenido
                boton.textContent = "Ocultar";      // Cambiar el texto del botón
            } else {
                contenido.style.display = "none";   // Ocultar el contenido
                boton.textContent = "Mostrar más";  // Cambiar el texto del botón
            }
        });

        // Agregar los elementos al contenedor
        div1.appendChild(titulo);
        div1.appendChild(resumen);
        div1.appendChild(contenido);
        div1.appendChild(boton);

        noticias.appendChild(div1);
    })
}
