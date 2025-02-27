
import React from "react";

const doubleRoutes = (feed, shapeId) => {
    if (!feed[shapeId]) {
        console.log(`Shape ID ${shapeId} не найден.`);
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

    if (matches.length > 0) {
        console.log(`Совпадения для ${shapeId}: ${matches}`);
    } else {
        console.log(`Нет совпадений для ${shapeId}.`);
    }
}

export { doubleRoutes };