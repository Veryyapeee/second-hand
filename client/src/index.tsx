import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "react-toastify/dist/ReactToastify.min.css";

const queryClient = new QueryClient();
export const history = createBrowserHistory();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router history={history}>
      <React.StrictMode>
        <ToastContainer />
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </React.StrictMode>
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
