import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminRoute from "Routes/AdminRoute";

import MainPage from "Pages/MainPage/MainPage";

const Hello = () => {
  return <span>Protected</span>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route
        path="/(.+)"
        render={() => <AdminRoute path="/protected" component={Hello} />}
      />
    </Switch>
  );
}

export default App;
