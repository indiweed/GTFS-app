const getRouteValue = (event) => {
    let parentDiv = event.closest('div');
    let inputElement = parentDiv.querySelector('.routeId');
    let value = inputElement.value;
    return value
}

export {getRouteValue}