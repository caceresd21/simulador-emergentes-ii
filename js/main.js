let preguntas = [];

function cargarPreguntas() {
    const modulo = document.getElementById('moduloSelect').value;
    const script = document.createElement('script');
    script.src = `js/${modulo}.js`;
    script.onload = () => mostrarPreguntas();
    document.body.appendChild(script);
}

function mostrarPreguntas() {
    const formulario = document.getElementById('formulario');
    formulario.innerHTML = "";
    preguntas.forEach((pregunta, i) => {
        let html = `<div class="pregunta">
                      <p><strong>${i + 1}. ${pregunta.texto}</strong></p>`;
        if (pregunta.tipo === "simple") {
            pregunta.opciones.forEach((opt, j) => {
                html += `<label class="opcion">
                           <input type="radio" name="p${i}" value="${j}"> ${opt}
                         </label><br>`;
            });
        } else {
            pregunta.opciones.forEach((opt, j) => {
                html += `<label class="opcion">
                           <input type="checkbox" name="p${i}" value="${j}"> ${opt}
                         </label><br>`;
            });
        }
        html += `</div>`;
        formulario.innerHTML += html;
    });

    formulario.innerHTML += `<button type="button" onclick="corregir()">Corregir</button>`;
}

function corregir() {
    let correctas = 0;
    let total = preguntas.length;
    preguntas.forEach((pregunta, i) => {
        let selector = pregunta.tipo === "simple" 
                     ? `input[name="p${i}"]:checked` 
                     : `input[name="p${i}"]:checked`;
        let seleccionadas = Array.from(document.querySelectorAll(selector)).map(input => parseInt(input.value));

        const esCorrecto = JSON.stringify(seleccionadas.sort()) === JSON.stringify(pregunta.respuesta.sort());

        const preguntaDiv = document.getElementsByClassName('pregunta')[i];
        if (esCorrecto) {
            preguntaDiv.insertAdjacentHTML("beforeend", `<p class="correcta">✅ Correcto</p>`);
            correctas++;
        } else {
            let textoRespuesta = pregunta.respuesta.map(r => pregunta.opciones[r]).join(', ');
            preguntaDiv.insertAdjacentHTML("beforeend", `<p class="incorrecta">❌ Incorrecto. Respuesta correcta: ${textoRespuesta}</p>`);
        }
    });

    document.getElementById("resultado").innerText = `Tu puntaje es ${correctas} de ${total}`;
}
