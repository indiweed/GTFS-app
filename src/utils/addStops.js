import { fetchFeed } from "./fetchFeed";

const addStops = async (stops, onSuccess) => {
    const stopsList = await fetchFeed(stops);
    const coordinates = stopsList.map(stop => (
        [parseFloat(stop.stop_lat), parseFloat(stop.stop_lon)]
    ));

    onSuccess(coordinates)
    return coordinates
}


export {addStops}