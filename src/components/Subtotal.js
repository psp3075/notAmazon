import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
// import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import { useCart } from "react-use-cart";

function Subtotal() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const { totalItems, cartTotal, isEmpty } = useCart();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} items) : <strong>{value}</strong>
            </p>
            {/* <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small> */}
          </>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button
        onClick={(e) => history.push("/payment")}
        disabled={isEmpty || !user}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
