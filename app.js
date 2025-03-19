let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }
    
    let asignaciones = [...amigos];
    do {
        asignaciones = asignaciones.sort(() => Math.random() - 0.5);
    } while (!validarAsignaciones(asignaciones));
    
    mostrarResultados(asignaciones);
}

function validarAsignaciones(lista) {
    return lista.every((nombre, i) => nombre !== amigos[i]);
}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h2>Resultados:</h2>";
    
    amigos.forEach((nombre, i) => {
        const li = document.createElement("li");
        li.textContent = `${nombre} → ${asignaciones[i]}`;
        resultado.appendChild(li);
    });
}
