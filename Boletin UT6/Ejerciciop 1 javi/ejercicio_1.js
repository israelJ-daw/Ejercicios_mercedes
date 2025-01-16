window.addEventListener("load", () => {
    mostrarNoticias();
});

function mostrarNoticias() {
    // 1. Obtener el contenedor donde se agregarán las noticias
    var contenedorNoticias = document.getElementById("noticias");

    // 2. Verificar que el contenedor esté presente
    if (!contenedorNoticias) {
        console.error("El contenedor con id 'noticias' no se encontró.");
        return;
    }

    // 3. Crear un arreglo de noticias con los datos
    const noticias = [
        {
            "titular": "Noticia 1",
            "resumen": "Este es el resumen de la noticia 1.",
            "contenido": "Este es el contenido completo de la noticia 1. Aquí van todos los detalles.",
            "imagenMostrar": "https://via.placeholder.com/100?text=Mostrar", // Imagen para mostrar
            "imagenOcultar": "https://via.placeholder.com/100?text=Ocultar" // Imagen para ocultar
        },
        {
            "titular": "Noticia 2",
            "resumen": "Este es el resumen de la noticia 2.",
            "contenido": "Este es el contenido completo de la noticia 2. Aquí van todos los detalles.",
            "imagenMostrar": "https://via.placeholder.com/100?text=Mostrar", // Imagen para mostrar
            "imagenOcultar": "https://via.placeholder.com/100?text=Ocultar" // Imagen para ocultar
        },
        {
            "titular": "Noticia 3",
            "resumen": "Este es el resumen de la noticia 3.",
            "contenido": "Este es el contenido completo de la noticia 3. Aquí van todos los detalles.",
            "imagenMostrar": "https://via.placeholder.com/100?text=Mostrar", // Imagen para mostrar
            "imagenOcultar": "https://via.placeholder.com/100?text=Ocultar" // Imagen para ocultar
        }
    ];

    // 4. Recorremos el arreglo de noticias
    noticias.forEach(item => {
        // Crear un contenedor para cada noticia
        var divNoticia = document.createElement("div");
        divNoticia.classList.add("noticia");

        // Crear el título de la noticia
        var titulo = document.createElement("h1");
        titulo.textContent = item.titular;

        // Crear el resumen de la noticia
        var resumen = document.createElement("p");
        resumen.textContent = item.resumen;

        // Crear el contenido de la noticia (inicialmente oculto)
        var contenido = document.createElement("p");
        contenido.textContent = item.contenido;
        contenido.id = "contenido"; // Usamos el id para ocultarlo inicialmente

        // Crear la imagen para el botón de mostrar/ocultar
        var imagen = document.createElement("img");
        imagen.src = item.imagenMostrar; // Imagen de "mostrar" al principio
        imagen.alt = "Botón de mostrar/ocultar";
        imagen.classList.add("mostrar-btn");

        // Función para mostrar/ocultar el contenido y cambiar la imagen del botón
        imagen.addEventListener("click", () => {
            if (contenido.style.display === "none") {
                contenido.style.display = "block"; // Muestra el contenido
                imagen.src = item.imagenOcultar; // Cambia la imagen a "Ocultar"
            } else {
                contenido.style.display = "none"; // Oculta el contenido
                imagen.src = item.imagenMostrar; // Cambia la imagen a "Mostrar"
            }
        });

        // Añadir los elementos a la noticia
        divNoticia.appendChild(titulo);
        divNoticia.appendChild(resumen);
        divNoticia.appendChild(imagen);
        divNoticia.appendChild(contenido);

        // Añadir la noticia al contenedor
        contenedorNoticias.appendChild(divNoticia);
    });
}
