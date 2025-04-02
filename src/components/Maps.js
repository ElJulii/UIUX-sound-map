import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Howl } from 'howler';
import soundsData from 'src/data/sounds.json';

// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Load and display tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to create markers
const markers = [];
soundsData.forEach(sound => {
    const marker = L.marker([sound.lat, sound.lng]).addTo(map);
    marker.bindPopup(`<b>${sound.title}</b><br>${sound.location}`);

    // Sound preview on hover
    let soundPreview = new Howl({
        src: [`/public/sounds/${sound.file}`],
        volume: 0.5,
    });

    marker.on('mouseover', () => soundPreview.play());
    marker.on('mouseout', () => soundPreview.stop());

    markers.push({ marker, ...sound });
});

// Filtering function
const applyFilters = (filters) => {
    markers.forEach(({ marker, mood, type, title, location }) => {
        const matchesMood = filters.mood ? mood.includes(filters.mood) : true;
        const matchesType = filters.type ? type.includes(filters.type) : true;
        const matchesSearch = filters.search ? (title.toLowerCase().includes(filters.search) || location.toLowerCase().includes(filters.search)) : true;

        if (matchesMood && matchesType && matchesSearch) {
            marker.addTo(map);
        } else {
            marker.remove();
        }
    });
};

// Event listeners for filter controls
document.getElementById('filter-mood')?.addEventListener('change', (e) => {
    filters.mood = e.target.value;
    applyFilters(filters);
});
document.getElementById('filter-type')?.addEventListener('change', (e) => {
    filters.type = e.target.value;
    applyFilters(filters);
});
document.getElementById('search-bar')?.addEventListener('input', (e) => {
    filters.search = e.target.value.toLowerCase();
    applyFilters(filters);
});

export default map;
