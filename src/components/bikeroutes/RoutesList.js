import {Fragment} from 'react';

import RouteItem from './RoutesList';
import classes from './RouteList.module.css';

const RoutesList = (props) => {
    return (
        <Fragment>
            <ul className={classes.list}>
                {props.routes.map((route)=> (
                    <RouteItem 
                    key={route.id}
                    id={route.id}
                    name={route.name}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default RoutesList;

