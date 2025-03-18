// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista si el campo no está vacío
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe agregar al menos un amigo a la lista');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    mostrarResultado(amigoSeleccionado);
}

/**
 * Muestra el resultado del sorteo en la interfaz
 * @param {string} amigo - Nombre del amigo seleccionado
 */
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `¡${amigo} es el amigo secreto!`;
    resultado.appendChild(elementoResultado);
}


function inicializarEventos() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
}

document.addEventListener('DOMContentLoaded', inicializarEventos);