import React from "react";

const routeMap = (routeToCheck, dirId) => {
    const trips = routeToCheck;
    let arr  = [];
    if (trips) {
        for (const tripId in trips) {
            const [direction_id, shape_id] = trips[tripId];
            if ((typeof(dirId) !== 'object') && (direction_id == dirId)) {
                return shape_id;
            }
            else if ((typeof(dirId) === 'object') && (arr.length < 2)) {
                arr.push(shape_id)
            }
        }
        return arr
    }
    return null; 
}

export {routeMap}