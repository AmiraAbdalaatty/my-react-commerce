import styles from './explore.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import itemsContext from '../../Contexts/itemsContext';
import { useNavigate } from 'react-router-dom';


export default function Explore(){

    const { items } = useContext(itemsContext); 
    const Navigate = useNavigate(); 

    return(
        <div className={styles.containerofcontainer}>
            <div className={styles.container}>

              <div className={styles.buttonParant}>
                <button className={styles.button}></button>
                <div className={styles.today}>Our Produst</div>
              </div>

              <div className={styles.viewAll}>
                <div className={styles.flash}>Explore Our Product </div>
                <button 
                onClick={()=>Navigate('/product')}
                className={styles.viewAllButton}>View All</button>
              </div>

              <div className={styles.toButtons}>
               <button className={styles.buttons}><FaArrowLeft /></button>
               <button className={styles.buttons}><FaArrowRight /></button>
              </div>


            <div className={styles.try}>
              {items.slice(0,8).map((item, index)=>(
            
                <div
                key={index}
                className={styles.cardParant}
                onClick={()=>Navigate(`/itemdetails/${item.id}`)}>
                    
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
                 

              ))}
            </div>

            </div>
        </div>
    )
}; 
