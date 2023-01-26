import React from 'react'
import PriceFormat from '../helper/PriceFormat';
import CartAmoutToggle from './CartAmoutToggle';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartHook } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/Button';

const CartItem = (cartProduct) => {
    const {
        id,
        name,
        color,
        image,
        price,
        quantity,
        max,
        stock
    } = cartProduct;
    const {removeItem} = CartHook();
    const [amount, setAmount] = useState(quantity);

    const setDecrease = ()=>{
        return amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = ()=>{
        return amount < stock ? setAmount(amount + 1) : setAmount(stock);
    } 

    return (
    <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>color:</p>
                    <div className="color-style"
                    style={{backgroundColor: color, color: color}}>
                    </div>
                </div>
            </div>
        </div>

        {/* price */}
        <div className="cart-hide">
            <p><PriceFormat price={price}/></p>
        </div>

        {/* Quantity  */}
        <CartAmoutToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>

        {/* Subtotal */}
        <div className="cart-hide">
            <p><PriceFormat price={price * amount}/></p>
        </div>

        <div>
            <FaTrash className="remove_icon" onClick={()=> removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem;