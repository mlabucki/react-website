import classes from './RouteItem.module.css'

const RouteItem = (props) => {
    return (
        <li className={classes.item}>
            <p>{props.name}</p>
            <a className='btn'>View Fullscreen</a>
        </li>
    )
}

export default RouteItem;