preguntas = [
    {
        texto: "¿Cuál es el propósito principal de las sesiones en aplicaciones web?",
        tipo: "simple",
        opciones: [
            "Almacenar datos específicos del usuario en el navegador del cliente.",
            "Permitir la persistencia de información entre múltiples peticiones HTTP en el servidor.",
            "Guardar pequeños archivos de texto en el disco duro del usuario.",
            "Facilitar la comunicación directa entre dos navegadores."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuáles de las siguientes son ventajas de utilizar sesiones para la gestión de datos de usuario?",
        tipo: "multiple",
        opciones: [
            "Mayor seguridad para datos sensibles.",
            "Almacenamiento ilimitado en el lado del cliente.",
            "Pueden almacenar objetos complejos.",
            "Gestionadas automáticamente por el framework (ej. Flask)."
        ],
        respuesta: [0, 2, 3]
    },
    {
        texto: "¿Qué son las cookies en el contexto de las aplicaciones web?",
        tipo: "simple",
        opciones: [
            "Mecanismos para cifrar la comunicación entre cliente y servidor.",
            "Pequeños archivos de texto almacenados en el servidor para cada usuario.",
            "Pequeños archivos de texto almacenados en el navegador del cliente.",
            "Protocolos para la transferencia segura de archivos."
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles de las siguientes son ventajas de utilizar cookies?",
        tipo: "multiple",
        opciones: [
            "Permiten almacenar datos sensibles de forma segura.",
            "Almacenamiento en el lado del cliente.",
            "Útiles para preferencias no sensibles del usuario.",
            "Pueden persistir después de cerrar el navegador."
        ],
        respuesta: [1, 2, 3]
    },
    {
        texto: "¿Dónde se almacenan las sesiones y las cookies, respectivamente?",
        tipo: "simple",
        opciones: [
            "Ambas en el servidor.",
            "Ambas en el cliente.",
            "Las sesiones en el cliente y las cookies en el servidor.",
            "Las sesiones en el servidor y las cookies en el cliente."
        ],
        respuesta: [3]
    },
    {
        texto: "¿Qué afirmaciones son correctas sobre las diferencias entre sesiones y cookies?",
        tipo: "multiple",
        opciones: [
            "Las sesiones tienen un límite práctico de tamaño, las cookies no.",
            "Las cookies son generalmente menos seguras que las sesiones para datos sensibles.",
            "Las sesiones se cierran al finalizar la sesión del usuario, las cookies tienen caducidad opcional.",
            "Las cookies pueden almacenar objetos complejos, las sesiones solo texto."
        ],
        respuesta: [1, 2]
    },
    {
        texto: "¿Qué propiedad de la aplicación Flask es fundamental para trabajar de forma segura con sesiones?",
        tipo: "simple",
        opciones: [
            "`app.debug`",
            "`app.config['SECRET_KEY']`",
            "`app.secret_key`",
            "`app.testing`"
        ],
        respuesta: [2]
    },
    {
        texto: "En Flask, ¿cómo se accede a un valor almacenado en la sesión?",
        tipo: "simple",
        opciones: [
            "`request.session.get('clave')`",
            "`session['clave']`",
            "`session.get('clave')`",
            "`response.session.get('clave')`"
        ],
        respuesta: [2]
    },
    {
        texto: "Para establecer una cookie en Flask, ¿qué objeto se utiliza para añadir la cookie a la respuesta HTTP?",
        tipo: "simple",
        opciones: [
            "`request`",
            "`session`",
            "`make_response`",
            "`app`"
        ],
        respuesta: [2]
    },
    {
        texto: "En Flask, ¿cómo se recupera un valor de una cookie enviada por el cliente?",
        tipo: "simple",
        opciones: [
            "`session.get('nombre_cookie')`",
            "`request.cookies.get('nombre_cookie')`",
            "`response.cookies.get('nombre_cookie')`",
            "`app.cookies.get('nombre_cookie')`"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué tipo de aplicaciones prácticas se pueden simular o desarrollar utilizando sesiones y cookies, según los ejemplos dados?",
        tipo: "multiple",
        opciones: [
            "Un carrito de compras para almacenar productos.",
            "Un sistema de gestión de contactos (CRUD).",
            "Un blog con autenticación de usuarios.",
            "Un sistema de gestión de archivos en la nube."
        ],
        respuesta: [0, 1]
    }
];
