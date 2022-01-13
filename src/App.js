import { Route, Switch, Redirect } from 'react-router-dom';


import AllRoutes from './pages/AllRoutes';
import RouteDetail from './pages/RouteDetail';
import NewRoute from './pages/NewRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
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
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
