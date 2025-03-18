
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre !== "") {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputAmigo.value = "";
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => 
        `<li class="name-item">${amigo}</li>`
    ).join('');
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Debes agregar al menos 1 amigo");
        return;
    }

    // Mezcla el array y selecciona el primero
    const mezclado = [...amigos].sort(() => Math.random() - 0.5);
    const ganador = mezclado[0];

    // Muestra solo el nombre sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: ${ganador}!</li>`;
}

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por Favor ingrese un nombre.");
        inputAmigo.focus(); 
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = ""; 
}
