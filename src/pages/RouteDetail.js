import { Fragment, useEffect, useContext } from 'react';
import { useParams, Route, Link, useRouteMatch, } from 'react-router-dom';

import Highlight from '../components/bikeroutes/Highlight';
import Comments from '../components/comments/Comments';
import AuthContext from '../store/auth-context';
import useHttp from '../hooks/use-http';
import { getSingleBikeroute } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';


const RouteDetail = () => {
    const authCtx = useContext(AuthContext);
    const match = useRouteMatch();
    const params = useParams();

    const {bikerouteId, } = params;

    const {sendRequest, status, data: loadedBikeroute, error} =  useHttp(
        getSingleBikeroute,
        true
    );
    
    useEffect(()=> {
        sendRequest(bikerouteId);
    },[sendRequest, bikerouteId])

    if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }
    
    if(error){
        return <p className='centered'>{error}</p>
    }
    
    if(!loadedBikeroute.name) {
        return <p>No bike route found</p>;        
    }


    return (
        <Fragment>
            <Highlight name={loadedBikeroute.name} city={loadedBikeroute.city} distance={loadedBikeroute.distance}/>
         
            {!authCtx.isLoggedIn && <p className='centered'>You must be logged in to add comment</p>}
            {authCtx.isLoggedIn && <Route path={match.path} exact>
             <div className='centered'>
                 <Link className='btn--flat' to={`${match.url}/comments`}>
                     Load Comments
                 </Link>
             </div>
            </Route>}
            {authCtx.isLoggedIn && <Route path={`${match.path}/comments`} >
                <Comments />
            </Route>}
        </Fragment>
    );
};

export default RouteDetail;