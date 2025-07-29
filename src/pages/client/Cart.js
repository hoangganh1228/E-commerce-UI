import React, { useState } from 'react';
import Hero from '../../components/client/Hero';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 49.00,
      quantity: 1,
      image: 'images/product-1.png'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.00,
      quantity: 1,
      image: 'images/product-2.png'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const increaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleUpdateCart = () => {
    // Logic to update cart
    alert('Cart updated!');
  };

  const handleContinueShopping = () => {
    // Navigate to shop page
    window.location.href = '/shop';
  };

  const handleApplyCoupon = () => {
    // Logic to apply coupon
    alert(`Coupon ${couponCode} applied!`);
  };

  const handleProceedToCheckout = () => {
    // Navigate to checkout page
    window.location.href = '/checkout';
  };

  const subtotal = getSubtotal();
  const total = subtotal; // You can add tax, shipping, etc. here

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Blog"
        showButtons={true}
        showImage={true}
      />

      {/* Cart Section */}
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <img src={item.image} alt="Image" className="img-fluid" />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{item.name}</h2>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: '120px'}}>
                            <div className="input-group-prepend">
                              <button 
                                className="btn btn-outline-black decrease" 
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                &minus;
                              </button>
                            </div>
                            <input 
                              type="text" 
                              className="form-control text-center quantity-amount" 
                              value={item.quantity} 
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value) || 1;
                                updateQuantity(item.id, newQuantity);
                              }}
                              aria-label="Quantity" 
                            />
                            <div className="input-group-append">
                              <button 
                                className="btn btn-outline-black increase" 
                                type="button"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                &plus;
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button 
                            type="button"
                            className="btn btn-black btn-sm"
                            onClick={() => removeItem(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button 
                    className="btn btn-black btn-sm w-100"
                    onClick={handleUpdateCart}
                  >
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button 
                    className="btn btn-outline-black btn-sm w-100"
                    onClick={handleContinueShopping}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input 
                    type="text" 
                    className="form-control py-3" 
                    id="coupon" 
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <button 
                    className="btn btn-black"
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-end border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-end">
                      <strong className="text-black">${subtotal.toFixed(2)}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-end">
                      <strong className="text-black">${total.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button 
                        className="btn btn-black btn-lg py-3 w-100" 
                        onClick={handleProceedToCheckout}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;