import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, saga } from "./store/store";
import { sagaWatcher } from "./store/sagaWatcher";
import "./index.scss";
import { App } from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage";
import { routes } from "./App/routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.empoloyees} component={EmployeesPage} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

saga.run(sagaWatcher);

ReactDOM.render();

store.subscribe(ReactDOM.render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
