import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_1ThQI8ABWxjTDLoNdQl8VJxr00MMa1riMx");

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        if (authUser) {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          {user && (
            <Route path="/orders" exact>
              <Header />
              <Orders />
            </Route>
          )}

          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>

          {user && (
            <Route path="/payment" exact>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
          )}
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
