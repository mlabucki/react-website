import { useContext } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';


import AllRoutes from './pages/AllRoutes';
import RouteDetail from './pages/RouteDetail';
import NewRoute from './pages/NewRoute';

import Layout from './components/layout/Layout';
// import NotFound from './pages/NoFound';
import AuthPage from './pages/AuthPage';
import UserProfile from './components/profile/UserProfile';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);


  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/bikeroutes' />
      </Route>
      <Route path='/bikeroutes' exact>
        <AllRoutes />
      </Route>
      <Route path='/bikeroutes/:bikerouteId'>
        <RouteDetail />
      </Route>
      <Route path='/new-bikeroute'>
        <NewRoute />
      </Route>
      {!authCtx.isLoggedIn && (<Route path='/auth' exact>
        <AuthPage/>
      </Route> )}
      <Route path='/profile'>
      { authCtx.isLoggedIn && <UserProfile />}
      {!authCtx.isLoggedIn && <Redirect to='/auth' />}
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
