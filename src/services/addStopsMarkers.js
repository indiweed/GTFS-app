import deleteMarkers from "./deleteMarkers";
import addClusters from "./addClusters";

const addStopsMarkers = (routeCoord, map) => {
    deleteMarkers(map);
    if (!routeCoord || !Array.isArray(routeCoord) || routeCoord.length === 0) return;
    const geojsonData = {
        type: 'FeatureCollection',
        features: routeCoord.map(coord => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [coord[1], coord[0]],
            }
        })),
    };

    addClusters(map, geojsonData);
};

export default addStopsMarkers;
