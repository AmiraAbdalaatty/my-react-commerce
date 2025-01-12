import styles from './flashSale.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import itemsContext from '../../Contexts/itemsContext';
import { useNavigate } from 'react-router-dom';

export default function FlashSale(){

    const{ items } = useContext(itemsContext);

    const Navigat = useNavigate()
 
    return(
        <div>

        <div className={styles.container}>
            <div className={styles.buttonParant}>
                <button className={styles.button}></button>
                <div className={styles.today}>Today's</div>
            </div>
        </div>

        <div className={styles.flashContainer}>
         <div className={styles.flashParant} >
                <div className={styles.flash}>Flash Sales </div>
                <div></div>
         </div>
       </div>

       <div className={styles.itemContainer}>
       <div className={styles.itemParant}>
        <div className={styles.toButtons}>
            <button className={styles.buttons}><FaArrowLeft /></button>
            <button className={styles.buttons}><FaArrowRight /></button>
        </div>

        <div className={styles.containerofcontainer}> 
            {items.map((item,index)=>(
                <div 
                onClick={()=>Navigat(`/itemdetails/${item.id}`)}
                key={index}
                className={styles.cardContainer}>
                <div
                className={styles.cardParant}>
                    <div className={styles.cardPhotoHolder}>
                    <img
                    src={item.photo}
                    alt={item.name}
                    className={styles.cardPhoto}
                    /> 
                    </div>
                    <div className={styles.cardName}>{item.name}</div>
                    <div className={styles.disParant}>
                    <div className={styles.afterDis}>${item.afterDis}</div>
                    <div className={styles.peforeDis}>${item.peforeDis}</div>
                    </div>
                 </div>
                 </div>
            ))}
        </div>

         <div className={styles.viewAll}>
             <button 
             onClick={()=>Navigat('/product')}
             className={styles.viewAllButton}>View All Products
             </button>
          </div>
       </div>
       </div>

       

        </div>
    )
}