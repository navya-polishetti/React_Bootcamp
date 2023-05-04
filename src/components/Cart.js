import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <h1 className="p-2 m-2 text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="bg-purple-300 p-2 m-3 rounded-xl"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap p-2 m-2 ">
        {cartItems.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
