import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt='' />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>Rs {product.old_price}</div>
                <div className='productdisplay-right-price-new'>Rs {product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience. Each part of the custom-built driver works to produce sound with ultra-low distortion across the audible range — so you’ll hear every note with a new sense of clarity.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Color</h1>
                <div className='productdisplay-right-sizes'>
                    <div><span class="dot1"></span></div>
                    <div><span class="dot2"></span></div>
                    <div><span class="dot3"></span></div>
                    <div><span class="dot4"></span></div>
                    <div><span class="dot5"></span></div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            
        </div>
    </div>
  )
}

export default ProductDisplay