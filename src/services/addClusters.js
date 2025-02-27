const addClusters = (map, data) => {
    if (!map.getSource('clusterData')) {
        map.addSource('clusterData', {
            type: 'geojson',
            data: data,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50
        });
        map.addLayer({
            id:'clusters',
            type: 'circle',
            source: 'clusterData',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        })
        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'clusterData',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });
        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'clusterData',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 10,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });
    }
};

export default addClusters