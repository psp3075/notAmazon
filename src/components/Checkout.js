import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useCart } from "react-use-cart";
import Empty from "../empty.svg";
import "./Checkout.css";

function Checkout() {
  const [{ user }] = useStateValue();
  const { isEmpty, items } = useCart();

  // if (isEmpty)
  //   return (
  //     <>
  //       <p className="checkout__title">Your cart is empty, Go shopping</p>
  //       <img className="checkout__image" src={Empty} alt="empty cart" />
  //     </>
  //   );
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Naqia_DW/stripe_1500x120.jpg"
          alt="payment ad"
        />
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__title">Your Shopping Cart</h2>
        {isEmpty ? (
          <>
            <p>Your cart is empty, Go shopping</p>
            <img className="checkout__image" src={Empty} alt="empty cart" />
          </>
        ) : (
          items.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))
        )}
      </div>

      <div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
