import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RouteForm from '../components/bikeroutes/RouteForm';
import useHttp from '../hooks/use-http';
import {addRoute} from '../lib/api';

const NewRoute = () => {
    const {sendRequest, status} = useHttp(addRoute);
    const history = useHistory();

    useEffect(()=> {
        if(status === 'completed'){
            history.push('/bikeroutes');
        }
    },[status, history]);

    const addRouteHandler = (bikerouteData) => {
        sendRequest(bikerouteData);
        

        history.push('/bikeroutes');
    };
    return <RouteForm isLoading={status === 'pending'} onAddRoute={addRouteHandler}/>
};

export default NewRoute;