import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    return (<header className={classes.header}>
        <div className={classes.logo}>Great Bike Routes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/bikeroutes' activeClassName={classes.active}>
                        All Routes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new-bikeroute' activeClassName={classes.active}>
                        Add New Bike Route
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/auth' activeClassName={classes.active}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' activeClassName={classes.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <button className={classes.btn}>Logout</button>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;