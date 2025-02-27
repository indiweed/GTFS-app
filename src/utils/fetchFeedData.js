import { fetchFeed } from "./fetchFeed";
import ldb from 'localdata';

const fetchFeedData = async  (feed_trips, feed_shapes) => {

    const tableTrips = await fetchFeed(feed_trips);
    const tableShapes = await fetchFeed(feed_shapes);

    const routeToTrips = tableTrips.reduce((acc, {route_id, trip_id, direction_id, shape_id}) => {
        if (!acc[route_id]) {
            acc[route_id] = {};
        }
          acc[route_id][trip_id] = [direction_id, shape_id];
          return acc;
    })

    const tripsToShapes = tableShapes.reduce((accumulator, item) => {
        const { shape_id, shape_pt_lat, shape_pt_lon } = item;
        
        if (!accumulator[shape_id]) {
          accumulator[shape_id] = [];
        }
        
        accumulator[shape_id].push([parseFloat(shape_pt_lat), parseFloat(shape_pt_lon)]);
      
        return accumulator;
      }, {})
    
    ldb.set('trips', routeToTrips)
    ldb.set('shapes', tripsToShapes)
};

export {fetchFeedData}