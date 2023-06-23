import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/reducer/cartSlice';

function CartStore() {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch (decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <h1>Shopping Cart</h1>
            </div>

            <div className='container-fluid'>
            {cart.cartItems.length ===0 ? (
                <div className='row'>
                    <p>You cart is curretly empty</p>
                    <Link to="../Products"> Volver a products </Link>
                </div>
            ):(
                <>
                <div className='row'>
                    <div className='d-flex flex-row justify-content-between'>
                        <div className='w-100'><p>Product</p></div>
                        <div className='w-100'><p>Price</p></div>
                        <div className='w-100'><p>Quantity</p></div>
                        <div className='w-100'><p>Total</p></div>
                    </div>
                </div>
                <div className='container-fluid'>
                <div className='row'>
                <div className='d-flex flex-column justify-content-between'>
                        {
                            cart.cartItems?.map(
                                cartItem => (
                                    <>
                                    <div className='d-flex'>
                                    <div className='w-100'>
                                        <div key={cartItem.id}></div>
                                        <div className=''>
                                            <img className='img-product-size' src={cartItem.image} alt={cartItem.title} />
                                        </div>
                                        <p>{cartItem.title}</p>
                                        <button className='btn btn-outline-primary btn-sm' onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                    <div className='w-100'>
                                        <p>{cartItem.price}</p>
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex align-items-center'>
                                        <button className='btn btn-outline-primary btn-sm' onClick={()=>handleDecreaseCart(cartItem)}>-</button>
                                        <div className='count mx-2'>{cartItem.cartQuantity}</div>
                                        <button className='btn btn-outline-primary btn-sm' onClick={()=>handleIncreaseCart(cartItem)}>+</button>
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                       <p> ${cartItem.price * cartItem.cartQuantity}</p>
                                    </div>

                                    </div>
                                    </>

                                    
                                )
                            )
                        }
                </div>
                </div>
                <div className='row'>
                    <div className='d-flex'>
                        <div className='w-100'>
                            <button className='btn- btn-sm btn-outline-primary' onClick={()=>handleClearCart()}>Clear cart</button>
                        </div>
                        <div className='w-100'>
                            <div>
                                <p>Subtotal: <span>${cart.cartTotalAmount}</span></p>
                            </div>
                            <div>
                                <p>Taxes and shipping calculated at checkout</p>
                            </div>
                            <div>
                                <button className='btn btn-outline-primary btn-sm'>Check out</button>
                            </div>
                            <div className='w-100'>
                                <Link to={"../Products"}>Start Shopping</Link>

                            </div>
                            
                        </div>


                    </div>

                </div>
                </div>
                </>
            )} 
            </div>

        </div>
        </>
        
    );
}

export default CartStore;