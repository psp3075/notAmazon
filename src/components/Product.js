import React from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";
import { useCart } from "react-use-cart";

function Product({ id, title, image, price, rating }) {
  // const [, dispatch] = useStateValue();
  const { addItem } = useCart();
  //console.log("this is ", basket);
  let item = {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  };
  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: item,
  //   });
  // };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      {/* <button onClick={addToBasket}>Add to Cart</button> */}
      <button onClick={() => addItem(item)}>Add to Cart</button>
    </div>
  );
}

export default Product;
