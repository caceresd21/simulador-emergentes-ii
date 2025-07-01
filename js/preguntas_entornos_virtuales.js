preguntas = [
    {
        texto: "¿Qué es un entorno virtual en Python?",
        tipo: "simple",
        opciones: [
            "Un entorno gráfico para programar con Python",
            "Una terminal que solo ejecuta scripts .py",
            "Un espacio aislado para gestionar dependencias de un proyecto",
            "Una máquina virtual con Linux preinstalado"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles son razones para usar entornos virtuales?",
        tipo: "multiple",
        opciones: [
            "Evitar conflictos entre versiones de librerías",
            "Facilitar compartir proyectos con otros",
            "Obligar a usar pipenv",
            "Mantener el entorno limpio sin afectar el sistema global"
        ],
        respuesta: [0, 1, 3]
    },
    {
        texto: "¿Qué comando se utiliza para crear un entorno virtual en Linux o macOS?",
        tipo: "simple",
        opciones: [
            "python -m pip install venv",
            "python3 -m venv nombre_del_entorno",
            "python create-env",
            "pip install virtualenv"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué comando se utiliza para crear un entorno virtual en Windows?",
        tipo: "simple",
        opciones: [
            "python3 -m venv nombre_del_entorno",
            "cmd /c mkvenv nombre_del_entorno",
            "python -m venv nombre_del_entorno",
            "pipenv init"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cómo se activa un entorno virtual en Linux/macOS?",
        tipo: "simple",
        opciones: [
            "activate nombre_entorno",
            "bash nombre/bin/start",
            "source nombre_entorno/bin/activate",
            "python activate.py"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cómo se activa un entorno virtual en Windows?",
        tipo: "simple",
        opciones: [
            "activate",
            "nombre_entorno\\Scripts\\activate",
            "run_env nombre_entorno",
            "pipenv shell"
        ],
        respuesta: [1]
    },
    {
        texto: "¿Qué indica que un entorno virtual está activado?",
        tipo: "simple",
        opciones: [
            "Aparece el nombre del entorno al inicio del prompt",
            "La terminal se cierra automáticamente",
            "Se muestra una ventana gráfica",
            "Se abre el navegador"
        ],
        respuesta: [0]
    },
    {
        texto: "¿Cómo se instalan paquetes dentro de un entorno virtual?",
        tipo: "simple",
        opciones: [
            "pip install nombre_paquete",
            "apt install nombre_paquete",
            "python install nombre_paquete",
            "setup.py install"
        ],
        respuesta: [0]
    },
    {
        texto: "¿Qué comando se usa para generar un archivo de dependencias?",
        tipo: "simple",
        opciones: [
            "pip show > env.txt",
            "pip list > packages.txt",
            "pip freeze > requirements.txt",
            "pip save-all > requirements.txt"
        ],
        respuesta: [2]
    },
    {
        texto: "¿Cuáles son buenas prácticas al trabajar con entornos virtuales?",
        tipo: "multiple",
        opciones: [
            "Tener un entorno por proyecto",
            "Versionar el entorno en Git",
            "Usar requirements.txt",
            "Agregar el entorno al archivo .gitignore"
        ],
        respuesta: [0, 2, 3]
    },
    {
        texto: "¿Qué herramientas son alternativas a venv?",
        tipo: "multiple",
        opciones: [
            "virtualenv",
            "pipenv",
            "poetry",
            "conda"
        ],
        respuesta: [0, 1, 2, 3]
    },
    {
        texto: "¿Cómo se elimina un entorno virtual en Windows?",
        tipo: "simple",
        opciones: [
            "delete_env nombre",
            "rmdir /s nombre_entorno",
            "env remove",
            "pipenv uninstall"
        ],
        respuesta: [1]
    }
];
