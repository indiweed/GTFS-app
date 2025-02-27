import deleteClusters from "./deleteClusters";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const addFiniteMarkers = (map, data) => {
        let markers = [];
        if (!data || data.length === 0) return;

        if (document.querySelectorAll('.maplibregl-marker').length > 0) {
            document.querySelectorAll('.maplibregl-marker').forEach(marker => marker.remove());
        }

        if (map.getSource('clusterData')) {
            deleteClusters(map);
        }

        const coordinates = data.flat().map(innerArray => [innerArray[1], innerArray[0]]); 

        const route = {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: coordinates,
            },
        };

        if (map) {
            if (!map.getSource('route')) {
                map.addSource('route', {
                    type: 'geojson',
                    data: route,
                });
            } else {
                map.getSource('route').setData(route);
            }

            if (!map.getLayer('route')) {
                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: 'route',
                    paint: {
                        'line-color': '#888',
                        'line-width': 5,
                    },
                });
            }
        }

        markers.forEach(marker => marker.remove());
        markers = []; 

        const startMarker = new maplibregl.Marker({ color: 'green' })
            .setLngLat(coordinates[0])
            .addTo(map);
        markers.push(startMarker); 

        const endMarker = new maplibregl.Marker({ color: 'red' })
            .setLngLat(coordinates[data[0].length - 1])
            .addTo(map);
        markers.push(endMarker); 
        
        map.flyTo({ center: coordinates[0] });  
        let index = 0;

        const marker = new maplibregl.Marker({ color: 'blue' }) // Анимированная точка
            .setLngLat(coordinates[index])
            .addTo(map);

        const animateMarker = () => {
            if (index < coordinates.length) {
                marker.setLngLat(coordinates[index]);
                index++;
                requestAnimationFrame(animateMarker);
            }
            else {marker.remove()}
        };
        animateMarker()       
    };

export default addFiniteMarkers