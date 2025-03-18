
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
//alerta de ingresar nombres para sortear
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Debes agregar al menos 1 amigo");
        return;
    }

    // sorteador
    const mezclado = [...amigos].sort(() => Math.random() - 0.5);
    const ganador = mezclado[0];

    // muestra el nombre sorteado
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
