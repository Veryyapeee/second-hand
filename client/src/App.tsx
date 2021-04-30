import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import AdminRoute from "Routes/AdminRoute";

import Spinner from "Atoms/Spinner/Spinner";

const MainPage = React.lazy(() => import("Pages/MainPage/MainPage"));
const ClientTemplate = React.lazy(
  () => import("Templates/ClientTemplate/ClientTemplate")
);

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
          render={() => (
            <ClientTemplate>
              <Route exact path="/" component={MainPage} />
              <Route
                exact
                path="/town/:townId"
                render={() => <span>Town</span>}
              />
            </ClientTemplate>
          )}
        />
        <Route
          path="/(.+)"
          render={() => <AdminRoute path="/protected" component={Hello} />}
        />
      </Switch>
    </Suspense>
  );
};

export default App;
