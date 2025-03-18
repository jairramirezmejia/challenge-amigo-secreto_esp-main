let amigos = [];

/**
 * Valida si una cadena contiene solo caracteres válidos para nombres en español latino
 * Acepta letras (incluidas ñ), espacios, guiones y apóstrofes para nombres compuestos,
 * así como letras con acentos y diéresis.
 * 
 * @param {string} texto - Texto a validar
 * @returns {boolean} - Verdadero si el texto contiene solo caracteres válidos
 */

function esNombreValido(texto) {
    // Expresión regular que acepta letras (mayúsculas y minúsculas), incluyendo caracteres
    // especiales del español latino como ñ, á, é, í, ó, ú, ü, espacios, guiones y apóstrofes
    const regex = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s\-']+$/;
    return regex.test(texto);
}


function agregarAmigo() {
    // Obtener el valor del campo de texto y eliminar espacios extras
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Validar que solo contenga caracteres válidos para nombres
    if (!esNombreValido(nombreAmigo)) {
        alert('El nombre solo debe contener letras, acentos, espacios, guiones o apóstrofes');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Actualizar la lista visible en la interfaz
    actualizarListaAmigos();
    
    // Limpiar el campo de texto
    inputAmigo.value = '';
    
    // Enfocar nuevamente el campo para facilitar la entrada de más nombres
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert('Debe agregar al menos un amigo a la lista');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

/**
 * 
 * @param {string} amigo - Nombre del amigo seleccionado
 */
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    
    // Limpiar resultados anteriores
    resultado.innerHTML = '';
    
    // Crear y agregar el nuevo resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `¡${amigo} es el amigo secreto!`;
    resultado.appendChild(elementoResultado);
}

function inicializarEventos() {
    const inputAmigo = document.getElementById('amigo');
    
    // Event listener para agregar amigo al presionar Enter
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Event listener para validar caracteres mientras se escribe
    inputAmigo.addEventListener('input', function() {
        const valorActual = this.value;
        
        // Si hay caracteres inválidos, eliminarlos y actualizar el campo
        if (valorActual && !esNombreValido(valorActual)) {
            // Conservar solo los caracteres válidos
            const valorLimpio = valorActual.replace(/[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s\-']/g, '');
            this.value = valorLimpio;
        }
    });
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', inicializarEventos);