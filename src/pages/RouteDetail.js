import {Fragment} from 'react';
import {useParams, Route} from 'react-router-dom';

import Comments from '../components/comments/Comments';

const RouteDetail = () => {
    const params = useParams();
    
    return (
        <Fragment>
            <h1>RouteDetail</h1>
            <p>{params.routeId}</p>
            <Route path={`/bikeroutes/${params.routeId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
};

export default RouteDetail;