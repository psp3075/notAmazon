import React from "react";
import "./CheckoutProduct.css";
// import { useStateValue } from "./StateProvider";
import { useCart } from "react-use-cart";

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  quantity,
  hideButton,
}) {
  // const [dispatch] = useStateValue();
  const { items, updateItemQuantity, removeItem } = useCart();

  console.log(items);
  // const removeFromBasket = () => {
  //   dispatch({
  //     type: "REMOVE_FROM_BASKET",
  //     id: id,
  //   });
  // };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {title} -{" "}
          <span className="checkoutProduct__quantity">({quantity})</span>
        </p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={() => removeItem(id)}>Remove from Cart</button>
        )}
        {!hideButton && (
          <button onClick={() => updateItemQuantity(id, quantity - 1)}>
            -
          </button>
        )}
        {!hideButton && (
          <button onClick={() => updateItemQuantity(id, quantity + 1)}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
