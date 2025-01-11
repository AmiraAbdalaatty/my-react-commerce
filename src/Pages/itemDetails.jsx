import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import itemsContext from "../Contexts/itemsContext"
import styles from './itemDetails.module.css'
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosReturnLeft } from "react-icons/io";



export default function ItemDetails(){

    const {id} = useParams();

    const { items, addToCard, addToFavorite, visibleMassage, visibleFavorite, count, inc, dec} = useContext(itemsContext);
    const item = items.find((item)=>item.id===parseInt(id));

    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.leftDiv}><img src={item.photo} alt={item.name}/></div>
                <div className={styles.rightDiv}>
                    <div className={styles.div1}>{item.name}</div>
                    <div className={styles.div2}>${item.afterDis}</div>
                    <div className={styles.div3}>{item.Dec}</div>
                    <div className={styles.div4}>
                        <div className={styles.count}>
                            <button className={styles.dec} onClick={dec}> - </button>
                            {count}
                            <button className={styles.dec} onClick={inc}> + </button>
                        </div>
                        <button 
                        onClick={()=>addToCard(item)}
                        className={styles.button1}>
                            Buy Now
                        </button>
                        {visibleMassage && <div className={styles.massage}>Item added to the cart</div>}
                        <button 
                        onClick={()=>addToFavorite(item)}
                        className={styles.button2}><FaRegHeart />
                        </button>
                        {visibleFavorite && <div className={styles.massage}>Item added to favorites</div>}
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.div5up}>
                            <div className={styles.div5logo}><CiDeliveryTruck /></div>
                            <div>
                                <div className={styles.div5name}>Free Delivery</div>
                                <div className={styles.div5dic}>Enter your postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className={styles.div5down}>
                            <div className={styles.div5logo}><IoIosReturnLeft /></div>
                            <div>
                                <div className={styles.div5name}>Return Delivery</div>
                                <div className={styles.div5dic}>Free 30 Days Delivery Returns. Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; 