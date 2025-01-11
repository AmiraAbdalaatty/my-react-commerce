import { useContext, useState } from "react"
import itemsContext from "../Contexts/itemsContext"
import styles from './cart.module.css'
import { useNavigate } from "react-router-dom"

export default function Cart(){

    const {cartItems, count, inc, dec, addToCard, removeFromCard, onDelete, user} = useContext(itemsContext)
    const Navigate = useNavigate() 
    
    
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.afterDis * item.count); 
        }, 0);
    };

    if(!user) {
        return <div style={{border:"20px solid red"}}> click here to singin </div>
    }
        return (
            <div className={styles.container}>
                <div className={styles.container2}>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td className={styles.tr}><button onClick={()=>onDelete(item.id)} className={styles.removeButton}>x</button><img className={styles.photo} src={item.photo} alt={item.name}/>{item.name}</td>
                                    <td>${item.afterDis}</td>
                                    <td>
                                    <div className={styles.count}>
                                       <button className={styles.dec} onClick={() => removeFromCard(item)}> - </button>
                                        {item.count}
                                       <button className={styles.dec} onClick={() => addToCard(item)}> + </button>
                                    </div>
                                    </td>
                                    <td>${(Math.floor(item.afterDis * item.count * 100) / 100).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.buttonParant}>
                        <button 
                        onClick={()=>Navigate('/product')}
                        className={styles.button}>Return To Shop</button>
                        <button className={styles.button}>Update Cart</button>
                    </div>
                    <div className={styles.divParant}>
                        <div className={styles.left}>
                            <button className={styles.button1}>EX SAVE20</button>
                            <button className={styles.button2}>Apply Coupon</button>
                        </div>
                        <div className={styles.containerright}>
                            <div className={styles.right}> 
                            <div>Cart Total</div>
                            <div className={styles.subtotal}>
                                <div>Subtotal:</div>
                                <div>$ {calculateSubtotal().toFixed(2)}</div>
                            </div>
                            <div className={styles.subtotal}>
                                <div>Shipping:</div>
                                <div>Free</div>
                            </div>
                            <div className={styles.total}>
                                <div>Total:</div>
                                <div> $ {calculateSubtotal().toFixed(2)}</div>
                            </div>
                            <div className={styles.process}><button className={styles.process2}>Process To Checkout</button></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }