import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {

    const {getTotalCartAmount,all_products, cartItems,removeFromCart} = useContext(ShopContext);

    const handleCheckout = () => {
        window.location.href = 'https://buy.stripe.com/test_8wMbLI7CN6l5cz6dQQ';
    };

  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Items</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} alt='' className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>Rs {e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>Rs {e.new_price*cartItems[e.id]}</p>
                    <i class="fa-solid fa-xmark"  onClick={() => {removeFromCart(e.id)}}></i>
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h2>Cart Total</h2>
                <div>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>Rs {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>Rs {getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promo code, Enter here</p>
                <div className='cartitems-promobox'>
                    <input type='text' placeholder='Promo Code' />
                    <button>APPLY</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems