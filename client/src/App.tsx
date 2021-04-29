import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminRoute from "Routes/AdminRoute";

const Hello = () => {
  return <span>Protected</span>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <span>Hello world</span>} />
      <Route
        path="/(.+)"
        render={() => <AdminRoute path="/protected" component={Hello} />}
      />
    </Switch>
  );
}

export default App;
