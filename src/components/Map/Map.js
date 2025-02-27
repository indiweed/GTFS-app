import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import ldb from 'localdata';

import 'maplibre-gl/dist/maplibre-gl.css';
import '../Map/map.css';

import trips from '../../feedfeed/trips.txt';
import shapes from '../../feedfeed/shapes.txt';
import stops from '../../feedfeed/stops.txt';

import { fetchExtractData } from '../../utils/fetchExtractData';
import { fetchFeedData } from '../../utils/fetchFeedData';
import { fetchFilterData } from '../../utils/fetchFilterData';
import { routeMap } from '../../utils/routeMap';
import { addStops } from '../../utils/addStops';
import { getRouteValue } from '../../utils/getRouteValue';

import deleteClusters from '../../services/deleteClusters';
import addStopsMarkers from '../../services/addStopsMarkers';
import addFiniteMarkers from '../../services/addFiniteMarkers';

export default function Map() {

    // Карта
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = 30.312481;
    const lat = 59.938480;
    const zoom = 10;
    const API_KEY = 'MOGPDQoSiODCq4OuWQMJ';

    // Функционал
    useEffect(() => {
        if (map.current) return;

        // Инициализация карты
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.addControl(new maplibregl.NavigationControl());
    
        // Очистка ldb
        ldb.clear();
    
        // Добавление фидов в хранилище при инициализации карты
        fetchFeedData(trips, shapes);
    
        const elements = document.querySelectorAll('.items');
        const checkboxStop = document.querySelectorAll('#stops');
    
        const handleStopClick = (e) => {
            if (!e.checked) {
                deleteClusters(map.current);
            } else {
                addStops(stops, (stopsCoord) => {
                    addStopsMarkers(stopsCoord, map.current);
                });
            }
        };
    
        checkboxStop.forEach(e => {
            e.addEventListener('click', () => handleStopClick(e));
        });
    
        const handleElementClick = (event) => {
            checkboxStop.forEach(e => e.checked = false);
            if (event.target.tagName === 'BUTTON') {
                event.stopPropagation();
                const routeId = getRouteValue(event.target);
                ldb.get('trips', function(tripsValues) {
                    fetchExtractData(tripsValues, routeId, (data) => {
                        let dirId = 0;
                            if (event.target.classList.contains('direct_button')) {
                                dirId = 1;
                            }
                            else if (event.target.classList.contains('circular')) {
                                dirId = [0, 1];
                            }
                        const track = routeMap(data, dirId);
                        ldb.get('shapes', function (shapesValues) {
                            fetchFilterData(shapesValues, track, (coordsOfRoute) => {
                                addFiniteMarkers(map.current, coordsOfRoute);
                            });
                        });
                    });
                });
            }
        };
    
        elements.forEach(e => {
            e.addEventListener('click', handleElementClick);
        });
    
        // Очистка обработчиков событий 
        return () => {
            checkboxStop.forEach(e => e.removeEventListener('click', handleStopClick));
            elements.forEach(e => e.removeEventListener('click', handleElementClick));
        };
    }, [lng, lat, zoom, API_KEY]);
    
    

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}