preguntas = [
    {
        texto: "¿Cuál es el propósito fundamental de un sistema de login en una aplicación web?",
        tipo: "multiple",
        opciones: [
            "Identificar a los usuarios.",
            "Proteger ciertas secciones o funcionalidades.",
            "Personalizar la experiencia del usuario.",
            "Optimizar la carga de imágenes en la página."
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué extensión de Flask se utiliza específicamente para gestionar el inicio y cierre de sesión, y las sesiones persistentes?",
        tipo: "simple",
        opciones: [
            "Flask-SQLAlchemy",
            "Flask-WTF",
            "Flask-Login",
            "Flask-Mail"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué funcionalidad proporciona el decorador `@login_required` de Flask-Login?",
        tipo: "simple",
        opciones: [
            "Registrar nuevos usuarios en la base de datos.",
            "Proteger rutas, haciéndolas accesibles solo si el usuario está autenticado.",
            "Generar hashes de contraseñas de forma segura.",
            "Enviar correos electrónicos de confirmación de registro."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué módulo de Werkzeug se utiliza para herramientas de seguridad de contraseñas en Flask?",
        tipo: "simple",
        opciones: [
            "Werkzeug.routing",
            "Werkzeug.security",
            "Werkzeug.wrappers",
            "Werkzeug.exceptions"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué función de `Werkzeug.security` se utiliza para guardar contraseñas en forma encriptada?",
        tipo: "simple",
        opciones: [
            "`check_password_hash()`",
            "`encrypt_password()`",
            "`generate_password_hash()`",
            "`hash_password()`"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué función de `Werkzeug.security` permite verificar contraseñas sin revelarlas?",
        tipo: "simple",
        opciones: [
            "`generate_password_hash()`",
            "`validate_password()`",
            "`check_password_hash()`",
            "`decrypt_password()`"
        ],
        respuesta: [2]
    },
    {
        texto: "Cuando un nuevo usuario se registra, ¿cómo se guarda su contraseña en la base de datos en un sistema de login seguro?",
        tipo: "simple",
        opciones: [
            "En texto plano, para facilitar la recuperación.",
            "Encriptada o 'hasheada'.",
            "Temporalmente, y se elimina después de 24 horas.",
            "Como una pregunta de seguridad."
        ],
        respuesta: [1]
    },
    {
        texto: "Si la autenticación de un usuario es correcta durante el inicio de sesión, ¿qué acción se realiza para mantener su estado en la aplicación?",
        tipo: "simple",
        opciones: [
            "Se le envía un correo electrónico de confirmación.",
            "Se guarda su sesión usando Flask-Login.",
            "Se le redirige a la página de registro.",
            "Se borran todas sus cookies."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué sucede cuando un usuario cierra sesión en un sistema de login?",
        tipo: "simple",
        opciones: [
            "Su cuenta de usuario es eliminada de la base de datos.",
            "Se limpia su sesión activa.",
            "Se le pide que cambie su contraseña.",
            "Se le redirige automáticamente a una página de error."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué archivos HTML son mencionados como parte de la estructura de un proyecto de login en Flask?",
        tipo: "multiple",
        opciones: [
            "base.html",
            "contact.html",
            "index.html",
            "dashboard.html",
            "login.html",
            "register.html"
        ],
        respuesta: [0, 2, 3, 4, 5]
    }
];
