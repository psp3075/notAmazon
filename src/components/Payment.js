import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "./reducer";
// import axios from "./axios";
import { nanoid } from "nanoid";
import { db } from "../firebase";
import { useCart } from "react-use-cart";

export default function Payment() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  // const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  // const [clientSecret, setClientSecret] = useState(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [pincode, setPincode] = useState();

  // const stripe = useStripe();
  // const elements = useElements();

  const { items, totalItems, cartTotal } = useCart();

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);

  // console.log("secret", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    //     db.collection("users")
    //       .doc(user?.uid)
    //       .collection("orders")
    //       .doc(paymentIntent.id)
    //       .set({
    //         basket: basket,
    //         amount: paymentIntent.amount,
    //         created: paymentIntent.created,
    //       });
    setTimeout(() => {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(nanoid())
        .set({
          basket: items,
          amount: cartTotal * 100,
          created: new Date(),
          address: {
            name: name,
            streetAddress: streetAddress,
            pincode: pincode,
            contact: contact,
          },
        });

      setSucceeded(true);
      // setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_BASKET",
      });
      history.replace("/orders");
    }, 8000);
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    // setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{totalItems} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <h3>Address</h3>
            <label>Name</label>
            <input
              type="text"
              placeholder="Please type your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
            />
            <label>Pincode</label>
            <input
              type="number"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
            <label>Contact number</label>
            <input
              type="number"
              placeholder="Contact details"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {items.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={cartTotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button
                  disabled={
                    !contact ||
                    !name ||
                    !streetAddress ||
                    !pincode ||
                    processing ||
                    disabled ||
                    succeeded
                  }
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
