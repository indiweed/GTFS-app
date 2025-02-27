import React from "react";

const getRouteValue = (event) => {
    let parentDiv = event.closest('div');
    let inputElement = parentDiv.querySelector('.routeId');
    let value = inputElement.value;
    console.log("Значение routeId:", value);
    return value
}

export {getRouteValue}