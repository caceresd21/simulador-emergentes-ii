preguntas = [
    {
        texto: "¿Qué es el objeto request en Flask?",
        tipo: "simple",
        opciones: [
            "Un archivo HTML para mostrar formularios",
            "Una clase que almacena usuarios",
            "Un objeto que representa la solicitud HTTP enviada por el cliente",
            "Un log de errores de Flask"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué información encapsula el objeto request?",
        tipo: "multiple",
        opciones: [
            "Método HTTP",
            "Datos del formulario",
            "Base de datos SQL",
            "Parámetros de la URL"
        ],
        respuesta: [0, 1, 3]
    },
    {
        texto: "¿Qué atributo de request se utiliza para obtener datos enviados desde un formulario (POST)?",
        tipo: "simple",
        opciones: [
            "request.args",
            "request.headers",
            "request.form",
            "request.json"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué atributo se usa para acceder a los parámetros enviados en la URL (GET)?",
        tipo: "simple",
        opciones: [
            "request.form",
            "request.args",
            "request.files",
            "request.data"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué métodos HTTP maneja el objeto request?",
        tipo: "multiple",
        opciones: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        respuesta: [0, 1, 2, 3]
    },
    {
        texto: "¿Cuál de los siguientes atributos se usa para acceder a encabezados HTTP del cliente?",
        tipo: "simple",
        opciones: [
            "request.cookies",
            "request.headers",
            "request.json",
            "request.status"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cómo accedemos a archivos subidos por el cliente?",
        tipo: "simple",
        opciones: [
            "request.files",
            "request.uploads",
            "request.docs",
            "request.send"
        ],
        respuesta: [0]
    },
    {
        texto: "¿Qué es el objeto response en Flask?",
        tipo: "simple",
        opciones: [
            "Un componente HTML de respuesta automática",
            "Una variable que almacena errores del servidor",
            "Una estructura que representa la respuesta HTTP enviada por el servidor",
            "Un método GET oculto"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué componentes forman parte del objeto response?",
        tipo: "multiple",
        opciones: [
            "Código de estado HTTP",
            "Encabezados HTTP",
            "Cuerpo de la respuesta",
            "Método JSON POST"
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué función en Flask se usa para devolver respuestas JSON fácilmente?",
        tipo: "simple",
        opciones: [
            "response.jsonify()",
            "json.dumps()",
            "render_json()",
            "jsonify()"
        ],
        respuesta: [3]
    },
    {
        texto: "¿Qué hace la función make_response en Flask?",
        tipo: "simple",
        opciones: [
            "Crea archivos estáticos",
            "Redirecciona a otra ruta",
            "Crea una respuesta HTTP personalizada",
            "Muestra un formulario automáticamente"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué cabecera se puede modificar usando response.headers?",
        tipo: "simple",
        opciones: [
            "URL del navegador",
            "Content-Type",
            "request type",
            "Nombre del template"
        ],
        respuesta: [1]
    }
];
