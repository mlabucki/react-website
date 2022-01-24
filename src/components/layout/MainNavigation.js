import { useContext } from 'react';

import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    };


    return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Bike Routes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/bikeroutes' activeClassName={classes.active}>
                        All Routes
                    </Link>
                </li>
                {isLoggedIn && (
                <li>
                    <Link to='/new-bikeroute' activeClassName={classes.active}>
                        Add New Bike Route
                    </Link>
                </li>
                )}
                {!isLoggedIn && (
                <li>
                    <Link to='/auth' activeClassName={classes.active}>
                        Login
                    </Link>
                </li>
                )}
                {isLoggedIn && (
                <li>
                    <Link to='/profile' activeClassName={classes.active}>
                        Profile
                    </Link>
                </li>
                )}
                {isLoggedIn && (
                <li>
                    <button className={classes.btn} onClick={logoutHandler}>Logout</button>
                </li>
                )}
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;