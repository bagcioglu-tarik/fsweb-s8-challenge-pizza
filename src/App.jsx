import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";
import Success from "./pages/Success";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage></Homepage>
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
