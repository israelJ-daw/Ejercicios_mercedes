window.addEventListener("load", () => {
    inicializar();
});

const jsonData = [
    { src: "img/perito1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
    { src: "img/perito2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] },
];

function inicializar() {

    // Crear el título principal
    var titulo = document.createElement("h1");
    var texto = document.createTextNode("SUbttititulo");
    titulo.appendChild(texto);

    // Obtener el contenedor principal
    var todosviajes = document.getElementById("todosviajes");

    // Añadir el título al contenedor principal
    todosviajes.appendChild(titulo);

    // Crear una lista principal
    var ul1 = document.createElement("ul");

    // Recorrer el JSON para añadir los datos
    jsonData.forEach(item => {
        // Crear un elemento de lista para cada elemento del JSON
        var li1 = document.createElement("li");

        // Crear la imagen
        var img = document.createElement("img");
        img.src = item.src;

        // Crear el párrafo de descripción
        var p = document.createElement("p");
        p.textContent = item.desc;

        // Crear la lista secundaria para las especificaciones
        var ul2 = document.createElement("ul");
        ul2.classList.add("specs");

        // Recorrer las especificaciones del elemento actual
        item.specs.forEach(specs => {
            var li2 = document.createElement("li");
            li2.textContent = specs; // Cambié item.specs por specs
            ul2.appendChild(li2); // Añadir cada especificación a la lista secundaria
        });

        // Añadir los elementos al `li1`
        li1.appendChild(img); // Añadir la imagen al `li1`
        li1.appendChild(p);   // Añadir el párrafo al `li1`
        li1.appendChild(ul2); // Añadir la lista secundaria al `li1`

        // Añadir el `li1` a la lista principal (`ul1`)
        ul1.appendChild(li1);
    });

    // Añadir la lista principal al contenedor principal
    todosviajes.appendChild(ul1);
}
