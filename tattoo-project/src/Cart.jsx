import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./CartComp";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access cart state from Redux
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <h3 className="text-center mt-4">Your cart is empty.</h3>;
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="text-end">Total: ${calculateTotal()}</h4>
      <button className="btn btn-danger w-100 mt-3" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
