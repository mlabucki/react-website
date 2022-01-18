import { Fragment } from 'react';
import {useHistory, useLocation} from 'react-router-dom'

import RouteItem from './RouteItem';
import classes from './List.module.css';


const sortRoutes = (bikeroutes, ascending) => {
    return bikeroutes.sort((bikerouteA, bikerouteB) => {
      if (ascending) {
        return bikerouteA.id > bikerouteB.id ? 1 : -1;
      } else {
        return bikerouteA.id < bikerouteB.id ? 1 : -1;
      }
    });
  };

const RoutesList = (props) => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedRoutes = sortRoutes(props.bikeroutes, isSortingAscending)

    const changeSortingHandler = () => {
        // marked as favourite ??
        history.push({
            pathname: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`,
        });
        // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
    };

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>Sorting {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedRoutes.map((bikeroute) => (
                    <RouteItem
                        key={bikeroute.id}
                        id={bikeroute.id}
                        name={bikeroute.name}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default RoutesList;

