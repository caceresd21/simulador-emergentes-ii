preguntas = [
    {
        texto: "¿Qué es un framework en desarrollo de software?",
        tipo: "simple",
        opciones: [
            "Una librería de Python para instalar módulos",
            "Un conjunto de herramientas que provee una base para desarrollar software",
            "Un lenguaje de programación especializado",
            "Una plantilla HTML dinámica"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es Flask?",
        tipo: "simple",
        opciones: [
            "Un framework completo y pesado para aplicaciones web",
            "Un lenguaje de programación web",
            "Un microframework minimalista y modular para Python",
            "Un servidor web"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cómo se instala Flask desde la terminal?",
        tipo: "simple",
        opciones: [
            "pip flask install",
            "flask install",
            "pip install Flask",
            "python install flask"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué archivo se crea para iniciar una aplicación Flask?",
        tipo: "simple",
        opciones: [
            "index.html",
            "app.py",
            "run.py",
            "main.py"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuál es el propósito del parámetro '__name__' en Flask?",
        tipo: "simple",
        opciones: [
            "Indica el nombre del usuario logueado",
            "Determina si se debe usar HTTPS",
            "Determina la ubicación de la aplicación para cargar archivos",
            "Habilita la depuración automática"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué es un decorador en Python?",
        tipo: "simple",
        opciones: [
            "Una función que modifica el comportamiento de otra función",
            "Una función HTML para pintar la web",
            "Un parámetro de configuración",
            "Una etiqueta para definir clases"
        ],
        respuesta: [0]
    },
    {
        texto: "¿Para qué sirve el decorador @app.route() en Flask?",
        tipo: "simple",
        opciones: [
            "Para registrar un usuario",
            "Para asociar una URL con una función de Python",
            "Para declarar una base de datos",
            "Para importar módulos"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué sucede cuando un usuario accede a una URL registrada con @app.route()?",
        tipo: "simple",
        opciones: [
            "Flask ejecuta una consulta SQL",
            "El navegador abre un archivo estático",
            "Flask ejecuta la función asociada y retorna su resultado",
            "La app se reinicia"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué métodos HTTP maneja Flask por defecto?",
        tipo: "multiple",
        opciones: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        respuesta: [0, 1]
    },
    {
        texto: "¿Cuál es el objetivo de usar parámetros en las rutas de Flask?",
        tipo: "simple",
        opciones: [
            "Evitar repetir funciones",
            "Capturar valores dinámicos desde la URL y pasarlos a funciones",
            "Reducir el tamaño del código",
            "Ejecutar comandos del sistema"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cómo se accede al valor de un parámetro en la URL usando Flask?",
        tipo: "simple",
        opciones: [
            "Con request.url",
            "Con route.param",
            "Pasando el parámetro como argumento a la función",
            "Con print(request.get)"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué módulo se debe importar para manejar peticiones en Flask?",
        tipo: "simple",
        opciones: [
            "flask.config",
            "requesthandler",
            "flask.request",
            "from flask import request"
        ],
        respuesta: [3]
    },
    {
        texto: "¿Qué hace 'request.headers.get('User-Agent')' en Flask?",
        tipo: "simple",
        opciones: [
            "Obtiene el navegador que está usando el cliente",
            "Devuelve la dirección IP",
            "Solicita la contraseña del usuario",
            "Muestra la versión de Flask instalada"
        ],
        respuesta: [0]
    },
    {
        texto: "¿Qué hace 'request.args.get(\"nombre\")' en una ruta GET?",
        tipo: "simple",
        opciones: [
            "Recibe datos del formulario POST",
            "Obtiene un parámetro de la URL como ?nombre=valor",
            "Carga datos desde un archivo",
            "Establece una cookie"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué ocurre si el parámetro 'nombre' no está presente en la URL?",
        tipo: "simple",
        opciones: [
            "La función se detiene automáticamente",
            "El servidor se apaga",
            "Se muestra un mensaje indicando que falta un parámetro",
            "Se recarga la página"
        ],
        respuesta: [2]
    }
];
