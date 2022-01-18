import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Highlight from '../components/bikeroutes/Highlight';
import Comments from '../components/comments/Comments';

const DUMMY_ROUTES = [
    { id: 'r1', name: 'first' },
    { id: 'r2', name: 'second' },
];


const RouteDetail = () => {
    const match = useRouteMatch();
    const params = useParams()

    const bikeroute = DUMMY_ROUTES.find((bikeroute) => bikeroute.id === params.bikerouteId)
    
    if (!bikeroute) {
        return (
            <p>No bike route found</p>
        )
    }
    return (
        <Fragment>
            <Highlight name={bikeroute.name} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.path}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`} >
                <Comments />
            </Route>

        </Fragment>
    );
};

export default RouteDetail;