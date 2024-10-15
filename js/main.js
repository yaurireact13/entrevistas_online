// Función para abrir el modal y cargar la información de la entrevista
function openInterviewModal(name, imageSrc, content) {
    console.log("Name:", name);
    console.log("Image Source:", imageSrc);
    console.log("Content:", content);

    // Asignar el título, la imagen y el contenido al modal
    document.getElementById('interviewTitle').textContent = `Entrevista a ${name}`;
    document.getElementById('interviewImage').src = imageSrc;
    document.getElementById('interviewContent').textContent = content;
}

// Capturamos el botón y el contenedor del contenido adicional
document.getElementById('discoverMoreBtn').addEventListener('click', function() {
    var content = document.getElementById('additionalContent');
    
    // Alternar la visibilidad del contenido
    if (content.style.display === 'none') {
        content.style.display = 'block';
        this.textContent = 'Mostrar menos';
    } else {
        content.style.display = 'none';
        this.textContent = 'Descubre más';
    }
});
