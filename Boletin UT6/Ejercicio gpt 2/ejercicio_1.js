// JSON con las preguntas y respuestas
const faqJSON = [
    { 
        pregunta: "¿Qué es JavaScript?", 
        respuesta: "JavaScript es un lenguaje de programación utilizado principalmente para crear interactividad en las páginas web."
    },
    { 
        pregunta: "¿Qué es una función en JavaScript?", 
        respuesta: "Una función es un bloque de código diseñado para realizar una tarea específica, que se ejecuta cuando es llamado."
    },
    { 
        pregunta: "¿Qué son los eventos en JavaScript?", 
        respuesta: "Los eventos son acciones que ocurren en una página web, como un clic, el envío de un formulario o el movimiento del mouse, y pueden ser detectados por JavaScript para ejecutar código."
    }
];

// Al cargar la página
window.addEventListener("load", () => {
    const contenedorFAQ = document.getElementById("faq");

    // Recorrer el JSON para crear cada pregunta
    faqJSON.forEach((item, index) => {
        // Crear contenedor para cada pregunta
        const divPregunta = document.createElement("div");
        divPregunta.classList.add("faq-item");

        // Crear título de la pregunta
        const pregunta = document.createElement("h3");
        pregunta.textContent = item.pregunta;

        // Crear respuesta (oculta inicialmente)
        const respuesta = document.createElement("p");
        respuesta.textContent = item.respuesta;
        respuesta.classList.add("respuesta");
        respuesta.id = `respuesta-${index}`; // ID único para cada respuesta

        // Crear botón para mostrar/ocultar la respuesta
        const boton = document.createElement("button");
        boton.textContent = "Mostrar";
        boton.addEventListener("click", () => {
            if (respuesta.style.display === "none") {
                respuesta.style.display = "block"; // Mostrar respuesta
                boton.textContent = "Ocultar";    // Cambiar texto del botón
            } else {
                respuesta.style.display = "none"; // Ocultar respuesta
                boton.textContent = "Mostrar";    // Cambiar texto del botón
            }
        });

        // Agregar elementos al contenedor de la pregunta
        divPregunta.appendChild(pregunta);
        divPregunta.appendChild(boton);
        divPregunta.appendChild(respuesta);

        // Agregar la pregunta al contenedor principal
        contenedorFAQ.appendChild(divPregunta);
    });
});

