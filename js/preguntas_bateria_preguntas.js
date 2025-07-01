preguntas = [
    // Desarrollo de Aplicaciones Empresariales
    {
        texto: "¿Qué es una aplicación empresarial?",
        tipo: "simple",
        opciones: [
            "Un software diseñado para el entretenimiento de usuarios individuales.",
            "Un sistema operativo para servidores.",
            "Un software diseñado para satisfacer las necesidades de una organización, facilitando procesos como ventas, gestión de recursos, finanzas, etc.",
            "Una herramienta para la creación de sitios web estáticos."
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles son las características clave de una aplicación empresarial moderna?",
        tipo: "multiple",
        opciones: [
            "Escalabilidad",
            "Seguridad",
            "Integración",
            "Mantenibilidad",
            "Interoperabilidad",
            "Bajo costo de desarrollo inicial"
        ],
        respuesta: [0, 1, 2, 3, 4]
    },
    {
        texto: "¿En qué se diferencia una arquitectura monolítica de una basada en microservicios?",
        tipo: "simple",
        opciones: [
            "La monolítica usa un solo lenguaje de programación, los microservicios varios.",
            "La monolítica unifica toda la lógica en una sola aplicación; los microservicios la dividen en pequeños servicios independientes.",
            "La monolítica es más fácil de escalar que los microservicios.",
            "Los microservicios son más simples de desarrollar que las monolíticas."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué ventajas ofrece la arquitectura de microservicios?",
        tipo: "multiple",
        opciones: [
            "Escalabilidad individual de componentes.",
            "Despliegue y desarrollo independientes.",
            "Mejor tolerancia a fallos.",
            "Uso de diferentes lenguajes o tecnologías según el servicio.",
            "Alineación con metodologías ágiles.",
            "Mayor complejidad inicial."
        ],
        respuesta: [0, 1, 2, 3, 4]
    },
    {
        texto: "¿Qué significa CRM y qué función cumple en una empresa?",
        tipo: "simple",
        opciones: [
            "Customer Resource Management, gestiona los recursos de la empresa.",
            "Customer Relationship Management, gestiona la relación con los clientes.",
            "Company Risk Management, gestiona los riesgos corporativos.",
            "Content Review Management, gestiona el contenido web."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué diferencia hay entre CRM, ERP y SRP?",
        tipo: "multiple",
        opciones: [
            "CRM: Gestión de relaciones con clientes.",
            "ERP: Integra y gestiona procesos empresariales como finanzas y producción.",
            "SRP: Gestiona relaciones y procesos con proveedores.",
            "CRM: Planificación de recursos empresariales."
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Por qué es importante la seguridad en las aplicaciones empresariales?",
        tipo: "simple",
        opciones: [
            "Solo para cumplir con regulaciones gubernamentales.",
            "Porque manejan información sensible y una brecha puede causar pérdidas económicas, daño reputacional y sanciones legales.",
            "Para hacer las aplicaciones más rápidas.",
            "Para reducir el tamaño del código fuente."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué herramientas se pueden utilizar en Python para desarrollar aplicaciones empresariales?",
        tipo: "multiple",
        opciones: [
            "Flask",
            "SQLAlchemy",
            "Jinja2",
            "Marshmallow",
            "Gunicorn/Uvicorn",
            "Docker"
        ],
        respuesta: [0, 1, 2, 3, 4, 5]
    },
    {
        texto: "¿Qué ventajas ofrece Flask para el desarrollo empresarial?",
        tipo: "multiple",
        opciones: [
            "Es un framework monolítico y rígido.",
            "Minimalista y extensible.",
            "Facilidad de integración con otras tecnologías.",
            "Control total sobre la arquitectura.",
            "Ideal para microservicios.",
            "Gran comunidad y documentación."
        ],
        respuesta: [1, 2, 3, 4, 5]
    },
    {
        texto: "¿Cómo se logra la interoperabilidad en aplicaciones empresariales?",
        tipo: "simple",
        opciones: [
            "Mediante el uso exclusivo de un único lenguaje de programación.",
            "A través de APIs (REST, GraphQL), formatos de intercambio de datos (JSON/XML), estándares abiertos y middleware.",
            "Instalando todas las aplicaciones en el mismo servidor físico.",
            "Reduciendo la cantidad de datos que se comparten entre sistemas."
        ],
        respuesta: [1]
    },

    // Desarrollo Backend y persistencia de datos
    {
        texto: "¿Cómo se define una ruta en Flask y qué función cumple?",
        tipo: "simple",
        opciones: [
            "Se define con una función sin decorador y maneja la lógica de la base de datos.",
            "Se define mediante un decorador como `@app.route('/ruta')` que asocia una URL con una función específica para manejar solicitudes HTTP.",
            "Es un archivo de configuración que especifica las dependencias del proyecto.",
            "Es un método para cifrar las comunicaciones entre el cliente y el servidor."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué tipos de solicitudes HTTP se pueden manejar en Flask?",
        tipo: "multiple",
        opciones: [
            "GET (obtener datos)",
            "POST (enviar datos)",
            "PUT/PATCH (actualizar recursos)",
            "DELETE (eliminar recursos)",
            "FTP (transferencia de archivos)"
        ],
        respuesta: [0, 1, 2, 3]
    },
    {
        texto: "¿Cómo se conecta Flask a una base de datos relacional como SQLite3 o MySQL?",
        tipo: "simple",
        opciones: [
            "Usando solo el módulo `sqlite3` o `mysql.connector` directamente en cada función.",
            "Mediante controladores específicos y, generalmente, un ORM como SQLAlchemy, configurando la URI de la base de datos.",
            "A través de archivos CSV para importar y exportar datos.",
            "Conectándose directamente al sistema de archivos del servidor."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué URI de conexión sería apropiada para MySQL con PyMySQL en Flask-SQLAlchemy?",
        tipo: "simple",
        opciones: [
            "`sqlite:///mi_base.db`",
            "`mysql+pymysql://usuario:contraseña@localhost/nombre_base`",
            "`postgresql://usuario:contraseña@localhost/nombre_base`",
            "`mongodb://localhost:27017/nombre_base`"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué diferencias hay entre bases de datos relacionales y no relacionales (NoSQL)?",
        tipo: "multiple",
        opciones: [
            "Relacionales: Estructuran datos en tablas con relaciones; NoSQL: Almacenan en documentos, grafos o claves-valor.",
            "Relacionales: Son más flexibles y escalables horizontalmente; NoSQL: Son consistentes y basadas en SQL.",
            "Relacionales: Son consistentes y basadas en SQL; NoSQL: Son más flexibles y escalables horizontalmente.",
            "Relacionales: Ideales para datos no estructurados; NoSQL: Ideales para datos estructurados."
        ],
        respuesta: [0, 2] // La opción 2 es la correcta que describe la diferencia, la 0 es parte de la descripción.
    },
    {
        texto: "¿Qué es un ORM y por qué se utiliza en el backend?",
        tipo: "simple",
        opciones: [
            "Un sistema de gestión de redes que optimiza la comunicación.",
            "Una herramienta que permite mapear objetos de un lenguaje de programación a tablas en una base de datos relacional, simplificando el acceso a datos.",
            "Un motor de plantillas para generar HTML dinámico.",
            "Un servidor web para desplegar aplicaciones Python."
        ],
        respuesta: [1]
    },
    {
        texto: "Con un ORM como SQLAlchemy, ¿cómo se puede crear un nuevo registro de usuario?",
        tipo: "simple",
        opciones: [
            "`db.execute('INSERT INTO usuario ...')`",
            "`nuevo_usuario = Usuario(nombre='Bruno'); db.session.add(nuevo_usuario); db.session.commit()`",
            "`Usuario.create(nombre='Bruno')`",
            "`db.query('INSERT INTO usuario ...')`"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cómo se define un modelo de datos en SQLAlchemy?",
        tipo: "simple",
        opciones: [
            "Como una función Python que devuelve un diccionario.",
            "Como una clase Python que hereda de `db.Model`, donde los atributos representan las columnas de una tabla.",
            "Como un archivo JSON que describe la estructura de la base de datos.",
            "Directamente en el archivo de configuración de Flask."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cómo se optimiza una consulta a la base de datos?",
        tipo: "multiple",
        opciones: [
            "Utilizando índices en campos frecuentemente consultados.",
            "Filtrando los datos con `query.filter()` para evitar traer todo el conjunto.",
            "Usando `join` para evitar múltiples consultas separadas.",
            "Limitando los resultados (`.limit(n)`).",
            "Evitando cargas innecesarias (`lazy='dynamic'` o `selectinload`).",
            "Realizando todas las consultas en una sola transacción grande."
        ],
        respuesta: [0, 1, 2, 3, 4]
    },
    {
        texto: "¿Qué es una transacción en bases de datos y cómo se maneja en Flask con SQLAlchemy?",
        tipo: "simple",
        opciones: [
            "Es una operación de cifrado de datos.",
            "Es un registro de cambios guardado en el repositorio Git.",
            "Agrupa un conjunto de operaciones que deben completarse exitosamente o deshacerse en conjunto, manejado con `try`, `db.session.add()`, `db.session.commit()` y `db.session.rollback()`.",
            "Es un tipo de solicitud HTTP para obtener datos."
        ],
        respuesta: [2]
    },

    // Seguridad en Aplicaciones Empresariales
    {
        texto: "¿Cuál es la diferencia entre autenticación y autorización?",
        tipo: "simple",
        opciones: [
            "Autenticación es para proteger datos; autorización es para cifrarlos.",
            "Autenticación verifica la identidad del usuario; autorización determina sus permisos.",
            "Autenticación es para usuarios nuevos; autorización para usuarios existentes.",
            "Autenticación usa contraseñas; autorización usa tokens."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Por qué es importante cifrar los datos sensibles?",
        tipo: "simple",
        opciones: [
            "Para aumentar la velocidad de la base de datos.",
            "Porque protege información crítica como contraseñas o datos personales, haciéndolos ilegibles sin la clave adecuada.",
            "Para reducir el espacio de almacenamiento en la base de datos.",
            "Solo es necesario para datos públicos."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué algoritmos se usan comúnmente para cifrado de contraseñas de forma segura?",
        tipo: "multiple",
        opciones: [
            "MD5",
            "bcrypt",
            "argon2",
            "PBKDF2",
            "SHA-1"
        ],
        respuesta: [1, 2, 3]
    },
    {
        texto: "¿Por qué es fundamental usar HTTPS en una aplicación empresarial?",
        tipo: "simple",
        opciones: [
            "Para hacer la página más atractiva visualmente.",
            "Porque cifra la comunicación entre el cliente y el servidor, impidiendo la intercepción o modificación de datos durante la transmisión.",
            "Para mejorar el posicionamiento SEO únicamente.",
            "Solo es necesario para sitios web de comercio electrónico."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué técnicas se aplican para validar y sanitizar las entradas del usuario?",
        tipo: "multiple",
        opciones: [
            "Validar: comprobar que el dato cumple un formato o regla esperada.",
            "Sanitizar: eliminar o neutralizar caracteres peligrosos para evitar ataques.",
            "Almacenar todas las entradas directamente en la base de datos.",
            "Ignorar las entradas de usuarios no autenticados."
        ],
        respuesta: [0, 1]
    },
    {
        texto: "¿Qué herramientas se pueden usar en Flask para mejorar la seguridad?",
        tipo: "multiple",
        opciones: [
            "Flask-Login (autenticación y sesiones seguras)",
            "Flask-WTF (formularios con protección CSRF)",
            "Flask-Talisman (forzar HTTPS y políticas de seguridad)",
            "bcrypt / passlib (cifrado de contraseñas)",
            "Flask-DebugToolbar"
        ],
        respuesta: [0, 1, 2, 3]
    },
    {
        texto: "¿En qué consiste la auditoría de actividades y por qué es importante el logging?",
        tipo: "simple",
        opciones: [
            "Consiste en revisar el código fuente para encontrar errores de sintaxis.",
            "Consiste en registrar eventos importantes del sistema para detectar actividades sospechosas, investigar incidentes de seguridad y cumplir normativas.",
            "Consiste en optimizar las consultas a la base de datos.",
            "Consiste en la creación de copias de seguridad de la base de datos."
        ],
        respuesta: [1]
    },

    // Web Services y APIs
    {
        texto: "¿Qué es una API y para qué se utiliza en el desarrollo web?",
        tipo: "simple",
        opciones: [
            "Un lenguaje de programación para el frontend.",
            "Un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí, exponiendo funcionalidades o datos.",
            "Una base de datos NoSQL para almacenar documentos.",
            "Una herramienta para el despliegue de aplicaciones en la nube."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es una API RESTful?",
        tipo: "simple",
        opciones: [
            "Una API que solo utiliza el método HTTP GET.",
            "Una API que sigue el estilo de arquitectura REST, basada en el uso de métodos HTTP y recursos identificables por URLs.",
            "Una API que requiere una conexión persistente y en tiempo real.",
            "Una API que solo se puede consumir desde el mismo servidor."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cómo se diseña una API RESTful básica con Flask?",
        tipo: "simple",
        opciones: [
            "Definiendo rutas para los endpoints, manejando solicitudes HTTP y usando `jsonify()` para respuestas JSON.",
            "Creando un archivo XML con todas las funcionalidades de la API.",
            "Utilizando únicamente el módulo `requests` para enviar solicitudes.",
            "Configurando un servidor FTP para la transferencia de datos."
        ],
        respuesta: [0]
    },
    {
        texto: "¿Cómo se puede consumir una API externa desde una aplicación Flask?",
        tipo: "simple",
        opciones: [
            "Solo es posible si la API externa está en el mismo servidor.",
            "Se puede usar la librería `requests` para enviar solicitudes HTTP a la API externa.",
            "Mediante la copia manual de los datos de la API.",
            "Utilizando un navegador web para acceder a la API."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué mecanismos se usan para proteger una API con autenticación y autorización?",
        tipo: "multiple",
        opciones: [
            "Tokens (JWT)",
            "API Keys",
            "OAuth2",
            "Contraseñas en texto plano en la URL"
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué es un JWT y cómo funciona?",
        tipo: "simple",
        opciones: [
            "Un tipo de base de datos NoSQL.",
            "Un motor de plantillas para HTML.",
            "Un token codificado que contiene información del usuario y su autorización, enviado en la cabecera Authorization para validar al usuario sin mantener una sesión en el servidor.",
            "Un protocolo para la transferencia de archivos."
        ],
        respuesta: [2]
    },
    {
        texto: "¿Por qué es importante documentar una API?",
        tipo: "simple",
        opciones: [
            "Solo para fines de marketing.",
            "Porque facilita que otros desarrolladores puedan entender cómo usarla correctamente, mejorando la colaboración y reduciendo errores.",
            "Para aumentar la velocidad de las solicitudes HTTP.",
            "Para cifrar los datos transmitidos."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué herramientas se pueden usar para documentar APIs en Flask?",
        tipo: "simple",
        opciones: [
            "Microsoft Word",
            "Swagger / OpenAPI",
            "Google Docs",
            "Bloc de notas"
        ],
        respuesta: [1]
    },

    // Despliegue y monitoreo
    {
        texto: "¿Qué es un servidor web y cuál es su función en el despliegue de una aplicación?",
        tipo: "simple",
        opciones: [
            "Un programa para escribir código.",
            "Un software que gestiona las solicitudes HTTP y entrega contenido web a los clientes, sirviendo archivos estáticos y manejando peticiones al backend.",
            "Una base de datos para almacenar usuarios.",
            "Un sistema operativo para dispositivos móviles."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es Render y por qué es una buena opción para desplegar aplicaciones Flask?",
        tipo: "simple",
        opciones: [
            "Un editor de texto para código Python.",
            "Una plataforma de alojamiento en la nube ideal para proyectos académicos o personales por su sencillez, despliegue automatizado desde GitHub y plan gratuito.",
            "Una librería de Python para el desarrollo de juegos.",
            "Un sistema de control de versiones distribuido."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuáles son los pasos básicos para desplegar una aplicación Flask en Render?",
        tipo: "multiple",
        opciones: [
            "Subir el proyecto a un repositorio en GitHub.",
            "Crear un archivo `requirements.txt` con las dependencias.",
            "Añadir un archivo `Procfile` que indique cómo ejecutar la app.",
            "Conectarse a GitHub desde Render y seleccionar el repositorio.",
            "Configurar las variables de entorno necesarias y desplegar.",
            "Instalar un servidor web local en Render."
        ],
        respuesta: [0, 1, 2, 3, 4]
    },
    {
        texto: "¿Qué debe contener el archivo `Procfile` para una aplicación Flask en Render?",
        tipo: "simple",
        opciones: [
            "Una lista de todas las rutas de la aplicación.",
            "El comando para ejecutar el servidor, por ejemplo: `web: gunicorn app:app`.",
            "Las variables de entorno de la aplicación.",
            "Los datos de conexión a la base de datos."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué ventajas tiene usar Render frente a otras plataformas como Heroku?",
        tipo: "multiple",
        opciones: [
            "Despliegue automático desde GitHub.",
            "Plan gratuito generoso sin necesidad de tarjeta de crédito.",
            "Soporte para HTTPS y dominios personalizados incluidos.",
            "Panel simple e intuitivo.",
            "Soporte para tareas cron y servicios de backend permanentes.",
            "Solo soporta aplicaciones Node.js."
        ],
        respuesta: [0, 1, 2, 3, 4]
    },

    // Git y GitHub
    {
        texto: "¿Qué es Git y para qué se utiliza?",
        tipo: "simple",
        opciones: [
            "Un lenguaje de programación para el desarrollo web.",
            "Un sistema de control de versiones distribuido que permite registrar cambios en el código fuente, facilitar el trabajo colaborativo y el seguimiento de versiones.",
            "Una plataforma de alojamiento en la nube para bases de datos.",
            "Una herramienta para diseñar interfaces de usuario."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuál es la diferencia entre Git y GitHub?",
        tipo: "simple",
        opciones: [
            "Git es una plataforma en línea; GitHub es una herramienta local.",
            "Git es la herramienta de control de versiones local; GitHub es una plataforma en línea para alojar repositorios Git y colaborar.",
            "Git es para proyectos pequeños; GitHub para proyectos grandes.",
            "Git es de pago; GitHub es gratuito."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué comando se utiliza para inicializar un repositorio Git?",
        tipo: "simple",
        opciones: [
            "`git start`",
            "`git init`",
            "`git new`",
            "`git create`"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuáles son los pasos para subir un proyecto local a un repositorio en GitHub?",
        tipo: "multiple",
        opciones: [
            "Crear un repositorio en GitHub.",
            "Conectar el repositorio local al remoto (`git remote add origin ...`).",
            "Subir el código (`git add .`, `git commit -m \"...\"`, `git push -u origin main`).",
            "Descargar el repositorio de GitHub a la máquina local."
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué hace el comando `git clone`?",
        tipo: "simple",
        opciones: [
            "Sube los cambios locales al repositorio remoto.",
            "Copia un repositorio remoto (incluyendo su historial y archivos) a tu computadora local.",
            "Inicializa un nuevo repositorio Git en el directorio actual.",
            "Fusiona cambios de una rama a otra."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué diferencia hay entre `git pull` y `git push`?",
        tipo: "simple",
        opciones: [
            "`git pull` sube cambios; `git push` descarga cambios.",
            "`git pull` descarga y fusiona cambios desde el remoto al local; `git push` sube cambios desde el local al remoto.",
            "Ambos comandos hacen lo mismo.",
            "`git pull` crea una nueva rama; `git push` elimina una rama."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es un commit en Git?",
        tipo: "simple",
        opciones: [
            "Un archivo temporal que se ignora en el repositorio.",
            "Un registro de cambios guardado en el repositorio, con un mensaje que describe las modificaciones, como un 'punto de guardado'.",
            "Un comando para borrar el historial de versiones.",
            "Una rama paralela de desarrollo."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es una rama (branch) y para qué se utiliza?",
        tipo: "simple",
        opciones: [
            "Un archivo de configuración para el servidor.",
            "Una línea paralela de desarrollo dentro del mismo proyecto, utilizada para trabajar en nuevas características o correcciones sin afectar el código principal.",
            "Un tipo de base de datos para almacenar datos no estructurados.",
            "Un método para optimizar consultas a la base de datos."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué archivos se deben ignorar con `.gitignore`?",
        tipo: "multiple",
        opciones: [
            "Archivos temporales (`__pycache__/`)",
            "Configuraciones locales (`.env`)",
            "Entornos virtuales (`venv/`)",
            "Archivos de código fuente principales (`*.py`)",
            "Archivos compilados (`*.pyc`)"
        ],
        respuesta: [0, 1, 2, 4]
    },
    {
        texto: "¿Qué es un pull request (PR) en GitHub?",
        tipo: "simple",
        opciones: [
            "Un comando para descargar un repositorio remoto.",
            "Una solicitud para fusionar cambios de una rama con la rama principal, permitiendo revisar, comentar y aprobar los cambios antes de integrarlos.",
            "Un tipo de error que ocurre al subir código a GitHub.",
            "Un archivo que documenta las dependencias del proyecto."
        ],
        respuesta: [1]
    }
];
