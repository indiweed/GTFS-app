const deleteClusters = (map) => {
    if (map.getSource('clusterData')) {
        map.removeLayer('clusters');
        map.removeLayer('cluster-count');
        map.removeLayer('unclustered-point');
        map.removeSource('clusterData');
    }
};

export default deleteClusters;