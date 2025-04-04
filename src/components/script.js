document.addEventListener('DOMContentLoaded', function() {
    fetch('map.html')
    .then(response => response.text())
    .then(html => {
        // Extraer solo el contenido SVG
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const svg = doc.querySelector('svg');
        
        if (svg) {
            document.querySelector('.main__map').appendChild(svg);
        } else {
            console.error('No se encontró el SVG en map.html');
        }
    })
    .catch(error => console.error('Error al cargar el mapa:', error));
});