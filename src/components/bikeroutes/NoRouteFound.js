import { Link } from 'react-router-dom';
import classes from './NoRouteFound.module.css';

const NoRouteFound = () => {
    return (
        <div className={classes.noroute}>
            <p>No quote found!</p>
            <Link className='btn' to='/new-bikeroute'>
                Add a Bike Route
            </Link>
        </div>
    )
};

export default NoRouteFound;