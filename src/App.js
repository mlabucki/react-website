import { Route, Switch, Redirect  } from 'react-router-dom';


import AllRoutes from './pages/AllRoutes';
import RouteDetail from './pages/RouteDetail';
import NewRoute from './pages/NewRoute';

import Layout from './components/layout/Layout';
import NotFound from './pages/NoFound';
import AuthPage from './pages/AuthPage';
import UserProfile from './components/profile/UserProfile';

function App() {
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
      <Route path='/auth' exact>
        <AuthPage/>
      </Route>
      <Route path='/profile' exact>
        <UserProfile/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
