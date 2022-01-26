import { Link } from 'react-router-dom';
import classes from './RouteItem.module.css'

const RouteItem = (props) => {
    return (
        <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.name}</p>
          </blockquote>
          <figcaption>{props.city}</figcaption>
          <figcaption>{`${props.distance} km`}</figcaption>
        </figure>
        <Link className='btn' to={`/bikeroutes/${props.id}`}>
         
        </Link>
      </li>
    )
}

export default RouteItem;