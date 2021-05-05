import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AdminRoute from "Routes/AdminRoute";

import Spinner from "Atoms/Spinner/Spinner";

const MainPage = React.lazy(() => import("Pages/MainPage/MainPage"));
const ClientTemplate = React.lazy(
  () => import("Templates/ClientTemplate/ClientTemplate")
);

const Town = React.lazy(() => import("Pages/Town/Town"));

const Hello = () => {
  return <span>Protected</span>;
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to={"/home/mainPage"} />}
        />
        <Route
          path="/admin/(.+)"
          render={() => (
            <Switch>
              <AdminRoute path="/admin/protected" component={Hello} />
              <Route render={() => <Redirect to="/not-found" />} />
            </Switch>
          )}
        />
        <Route
          path="/home/(.+)"
          render={() => (
            <ClientTemplate>
              <Switch>
                <Route exact path="/home/mainPage" component={MainPage} />
                <Route
                  exact
                  path="/home/town/:townId/store/:storeId"
                  render={() => <span>Store</span>}
                />
                <Route exact path="/home/town/:townId" component={Town} />
                <Route render={() => <Redirect to="/not-found" />} />
              </Switch>
            </ClientTemplate>
          )}
        />
        <Route render={() => <Redirect to="/not-found" />} />
      </Switch>
    </Suspense>
  );
};

export default App;
