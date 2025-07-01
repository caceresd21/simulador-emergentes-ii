preguntas = [
    {
        texto: "¿Qué es una base de datos?",
        tipo: "simple",
        opciones: [
            "Un programa para editar documentos de texto.",
            "Un sistema organizado para almacenar, gestionar y recuperar información de forma eficiente.",
            "Una herramienta para crear páginas web estáticas.",
            "Un tipo de hardware para servidores."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Por qué es importante usar una base de datos en aplicaciones web dinámicas?",
        tipo: "simple",
        opciones: [
            "Solo para mejorar la estética de la aplicación.",
            "Para jugar un papel en la persistencia de datos.",
            "Para reducir el consumo de memoria RAM en el cliente.",
            "Para ejecutar código JavaScript en el servidor."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuáles de los siguientes son ejemplos de uso común de bases de datos?",
        tipo: "multiple",
        opciones: [
            "Almacenar datos de usuarios y contenido en aplicaciones web.",
            "Gestión de inventarios, ventas y clientes en empresas.",
            "Guardar publicaciones, perfiles y conexiones en redes sociales.",
            "Diseñar interfaces gráficas de usuario."
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué característica define a las bases de datos relacionales?",
        tipo: "simple",
        opciones: [
            "Almacenan datos en formatos de documentos o grafos.",
            "No siguen un esquema fijo y predefinido.",
            "Utilizan tablas con filas y columnas para organizar los datos.",
            "Son ideales para aplicaciones móviles pequeñas sin servidor."
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles de las siguientes son bases de datos relacionales?",
        tipo: "multiple",
        opciones: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Redis"
        ],
        respuesta: [1, 2]
    },
    {
        texto: "¿Qué característica principal tienen las bases de datos NoSQL?",
        tipo: "simple",
        opciones: [
            "Utilizan un esquema fijo y predefinido.",
            "Almacenan datos exclusivamente en tablas.",
            "No siguen un esquema fijo y predefinido, lo que les permite ser más flexibles.",
            "Requieren un servidor dedicado para cada conexión."
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles de las siguientes son bases de datos NoSQL?",
        tipo: "multiple",
        opciones: [
            "SQL Server",
            "MongoDB",
            "Cassandra",
            "SQLite"
        ],
        respuesta: [1, 2]
    },
    {
        texto: "¿Qué biblioteca de Python se recomienda instalar para conectarse a MySQL?",
        tipo: "simple",
        opciones: [
            "psycopg2-binary",
            "sqlite3",
            "mysql-connector-python",
            "flask-sqlalchemy"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Qué biblioteca de Python se utiliza para conectarse a una base de datos PostgreSQL?",
        tipo: "simple",
        opciones: [
            "mysql-connector-python",
            "psycopg2-binary",
            "pymysql",
            "sqlite3"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué es un cursor en el contexto de la conexión a bases de datos?",
        tipo: "simple",
        opciones: [
            "Un puntero a la ubicación física de la base de datos en el disco.",
            "Un objeto que permite ejecutar sentencias SQL y gestionar los resultados de las consultas.",
            "Una herramienta para diseñar el esquema de la base de datos.",
            "Un tipo de conexión de red segura."
        ],
        respuesta: [1]
    },
    {
        texto: "¿Cuáles son funcionalidades principales de un cursor de base de datos?",
        tipo: "multiple",
        opciones: [
            "Ejecutar consultas SELECT, INSERT, UPDATE, DELETE.",
            "Iterar sobre los resultados de una consulta de manera ordenada.",
            "Gestionar transacciones (commit/rollback).",
            "Diseñar la interfaz de usuario de la aplicación."
        ],
        respuesta: [0, 1, 2]
    },
    {
        texto: "¿Qué características hacen a SQLite una base de datos ligera y autónoma?",
        tipo: "multiple",
        opciones: [
            "Requiere un servidor dedicado para su funcionamiento.",
            "Se almacena en un solo archivo.",
            "Es portátil y fácil de usar.",
            "Es ideal para aplicaciones móviles o pequeñas aplicaciones web."
        ],
        respuesta: [1, 2, 3]
    },
    {
        texto: "Para conectar a una base de datos SQLite en Python, ¿qué módulo se importa generalmente?",
        tipo: "simple",
        opciones: [
            "mysql.connector",
            "psycopg2",
            "sqlite3",
            "pymysql"
        ],
        respuesta: [2]
    },
    {
        texto: "Después de ejecutar una consulta SELECT con un cursor en SQLite, ¿qué método se usa comúnmente para obtener todas las filas de resultados?",
        tipo: "simple",
        opciones: [
            "`cursor.execute()`",
            "`cursor.fetchone()`",
            "`cursor.fetchall()`",
            "`conn.close()`"
        ],
        respuesta: [2]
    }
];
