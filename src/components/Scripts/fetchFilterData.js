import React from "react";

const fetchFilterData = async (feed, k, onSuccess) => {

    const results = [];
    const data = []
    const keys = Array.isArray(k) ? k : [k];

    for (const key of keys) {
        if (feed.hasOwnProperty(key)) {
            data.push(feed[key]);
            results.push(data);
        } else {
            console.warn(`Shape ID ${key} not found in shapes.`);
        }
    }
    onSuccess(data);

    // Если нужно вернуть все найденные данные
    return results.length > 0 ? results : null;
};

export {fetchFilterData}