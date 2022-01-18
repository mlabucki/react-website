import { useEffect } from 'react';
import RoutesList from '../components/bikeroutes/RoutesList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getAllRoutes} from '../lib/api';

import NoRouteFound from '../components/bikeroutes/NoRouteFound';

// const DUMMY_ROUTES = [
//     { id: 'r1', name: 'first' },
//     { id: 'r2', name: 'second' },
// ];


const AllRoutes = (pops) => {
  
    const {sendRequest, status, data: loadedBikeroute, error} = useHttp(
        getAllRoutes,
        true
    );
    
    useEffect(()=> {
        sendRequest();
    },[sendRequest]);

    if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    };

    if(error){
        return <p className='centered focused'>{error.message}</p>
    }

    if(status === 'completed' && (!loadedBikeroute || loadedBikeroute.lenght === 0)){
        return <NoRouteFound />
    }

    return (
    <RoutesList bikeroutes={loadedBikeroute} />);

};

export default AllRoutes;