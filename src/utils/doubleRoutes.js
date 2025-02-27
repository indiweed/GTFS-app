const doubleRoutes = (feed, shapeId) => {
    if (!feed[shapeId]) {
        return;
    }

    const targetCoords = feed[shapeId];
    const matches = [];

    for (const [id, coords] of Object.entries(feed)) {
        if (id !== shapeId) {
            // Проверяем, совпадают ли координаты
            if (coords[0] === targetCoords[0] && coords[1] === targetCoords[1]) {
                matches.push(id);
            }
        }
    }
}

export { doubleRoutes };