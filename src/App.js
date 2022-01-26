import React, { useContext, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./components/profile/UserProfile";
import AuthContext from "./store/auth-context";


const NewRoute = React.lazy(() => import("./pages/NewRoute"));
const RouteDetail = React.lazy(()=> import("./pages/RouteDetail"));
const AllRoutes = React.lazy(()=> import('./pages/AllRoutes'));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner/>
        </div>
      }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/bikeroutes" />
          </Route>
          <Route path="/bikeroutes" exact>
            <AllRoutes />
          </Route>
          <Route path="/bikeroutes/:bikerouteId">
            <RouteDetail />
          </Route>
          <Route path="/new-bikeroute">
            {authCtx.isLoggedIn && <NewRoute />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" exact>
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
