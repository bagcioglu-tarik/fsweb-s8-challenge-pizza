import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";
import Success from "./pages/Success";
import ScrollToTop from "./component/ScrollToTop";
import "./App.css";
import Checkout from "./pages/Checkout";

function App() {
  const [formData, setFormData] = useState(null)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Homepage></Homepage>
        </Route>
        <Route path="/order">
          <Order handleFormData={setFormData} />
        </Route>
        <Route path="/checkout">
          <Checkout formData={formData} />
        </Route>
        <Route path="/success">
          <Success formData={formData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
