preguntas = [
    {
        texto: "¿Qué es Jinja2?",
        tipo: "simple",
        opciones: [
            "Una base de datos para Flask",
            "Un motor de plantillas que permite generar HTML dinámico en Python",
            "Una librería de JavaScript",
            "Un servidor de Flask para producción"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Para qué se utiliza Jinja2 en Flask?",
        tipo: "simple",
        opciones: [
            "Para acceder a bases de datos",
            "Para manejar rutas HTTP",
            "Para separar la lógica de presentación usando plantillas HTML dinámicas",
            "Para definir modelos de datos"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué se puede insertar dentro de una plantilla Jinja2 usando {{ }}?",
        tipo: "simple",
        opciones: [
            "Código SQL",
            "Imágenes",
            "Variables de Python",
            "Comentarios HTML"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué estructuras de control admite Jinja2?",
        tipo: "multiple",
        opciones: [
            "if",
            "for",
            "while",
            "switch"
        ],
        respuesta: [0, 1]
    },
    {
        texto: "¿Cuál es la función principal que se utiliza para renderizar plantillas en Flask?",
        tipo: "simple",
        opciones: [
            "render_html()",
            "render_view()",
            "render_template()",
            "render_output()"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Dónde deben ubicarse los archivos HTML para ser renderizados por Flask?",
        tipo: "simple",
        opciones: [
            "En la carpeta raíz del proyecto",
            "En una carpeta llamada static",
            "En una carpeta llamada templates",
            "En cualquier carpeta del sistema"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué plantilla HTML contiene esta estructura: {% for user in users %}...{% endfor %}?",
        tipo: "simple",
        opciones: [
            "Estructura de condicional",
            "Estructura de bucle",
            "Plantilla base",
            "Error 404"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué se logra con {% if logged_in %} en una plantilla Jinja2?",
        tipo: "simple",
        opciones: [
            "Incluir un archivo CSS",
            "Ejecutar un bucle en Python",
            "Mostrar contenido condicional según el estado del usuario",
            "Declarar una función Flask"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué hace el siguiente bloque en base.html? {% block content %}{% endblock %}",
        tipo: "simple",
        opciones: [
            "Declara una variable",
            "Define una sección reemplazable en la plantilla hija",
            "Agrega un título al sitio",
            "Cierra el servidor Flask"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué etiqueta permite que una plantilla hija use la estructura de base.html?",
        tipo: "simple",
        opciones: [
            "{% call 'base.html' %}",
            "{% add 'base.html' %}",
            "{% extends 'base.html' %}",
            "{% import 'base.html' %}"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué valores se pueden pasar a una plantilla mediante render_template?",
        tipo: "multiple",
        opciones: [
            "Strings",
            "Números",
            "Listas",
            "Objetos complejos (como diccionarios)"
        ],
        respuesta: [0, 1, 2, 3]
    },
    {
        texto: "¿Qué estructura de archivos se recomienda al usar Jinja2 con Flask?",
        tipo: "simple",
        opciones: [
            "Archivos HTML en 'static' y Python en 'templates'",
            "HTML y Python en la misma carpeta",
            "HTML en 'templates' y Python en el backend",
            "Todo el código debe ir en app.py"
        ],
        respuesta: [2]
    }
];
