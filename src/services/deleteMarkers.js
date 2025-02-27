const deleteMarkers = (map) => {
    document.querySelectorAll('.maplibregl-marker').forEach(marker => marker.remove());

    if (map.getSource('route')) {
        map.removeLayer('route');
        map.removeSource('route');
    }
}

export default deleteMarkers