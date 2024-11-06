import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../helpers/config';
import { useNavigate } from "react-router-dom";

const CartItemTable = ({ remove, quantity, additionalNotes, onNoteChange }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const fetchCartDetails = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get(`${BASE_URL}/products/cart/items/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart details:', error);
      setError('Failed to load cart items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);


  const handleQuantityChange = async (SKU, newQuantity) => {
    if (newQuantity < 1) return;
  
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.patch(
        `${BASE_URL}/products/cart/update/${SKU}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      // Update the cart in the state with the new data
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.SKU === SKU ? { ...item, ...response.data } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      alert("Failed to update cart quantity.");
    }
  };
  

  const handleRemoveItem = async (SKU) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${BASE_URL}/products/cart/${SKU}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Item successfully removed from the cart.");
      setCart((prevCart) => prevCart.filter(item => item.product.SKU !== SKU));
    } catch (error) {
      console.error('Error deleting cart item:', error);
      alert("Failed to remove item from cart.");
    }
  };
 


  return (
    <table className="cart-page-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Product Color</th>
          <th>Gross Weight</th>
          <th>Diamond</th>
          <th>Color Stone</th>
          <th>Net Weight</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.length === 0 ? (
          <tr className="no-item-msg">
            <td className="no-item-msg-text" colSpan="8">No items in the cart</td>
          </tr>
        ) : (
          cart.map((item) => (
            <React.Fragment key={item.product.SKU}>
              <tr>
                <td className="wi-20">
                  <div className="cart-product">
                    <div className="cart-product__img">
                      <img src={item.product.product_image} alt="Product" />
                    </div>
                    <div className="cart-product__txt">
                      <h6>
                        <Link to="/shopDetails">{item.product.product_name}</Link>
                      </h6>
                      <h6>{item.product.SKU}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cart-product__quantity">
                    <div className="cart-product__quantity-btns">
                      <button
                        className="cart-product__minus"
                        onClick={() => handleQuantityChange(item.product.SKU, item.quantity - 1)}
                      >
                        <i className="fa-light fa-minus"></i>
                      </button>
                      <button
                        className="cart-product__plus"
                        onClick={() => handleQuantityChange(item.product.SKU, item.quantity + 1)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      name="product-quantity-input"
                      className="cart-product-quantity-input"
                      min="0"
                      value={item.quantity}
                      onChange={(event) => {
                        const newQuantity = Math.max(0, parseInt(event.target.value));
                        handleQuantityChange(item.product.SKU, newQuantity);
                      }}
                    />
                  </div>
                </td>
                <td>{item.product.color}</td>
                <td>
                  {item.gross_weight} gm<br />
                 ( {item.product.gross_weight} gm)
                </td>
                <td>
                  {item.diamond_weight} gm<br />
                 ( {item.product.diamond_weight} gm)
                </td>
                <td>
                  {item.colour_stones} gm<br />
                  ({item.product.colour_stones} gm)
                </td>
                <td>
                  {item.net_weight} gm<br />
                  ({item.product.net_weight} gm)
                </td>

                <td>
                  <button
                    className="item-remove-btn"
                    onClick={() => handleRemoveItem(item.product.SKU)}
                  >
                    <i className="fa-light fa-xmark"></i>
                  </button>
                </td>
              </tr>
             
            </React.Fragment>
          ))
        )}

      </tbody>
      <Link to="/checkout">
      <button className="fz-1-banner-btn cart-checkout-btn " >
        Proceed to checkout
      </button>
      </Link>
   

    </table>
  );
};

export default CartItemTable;
