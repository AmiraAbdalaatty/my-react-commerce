import styles from './categories.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import itemsContext from '../../Contexts/itemsContext';
import { useNavigate } from 'react-router-dom';

export default function Categories(){

    const {category} = useContext(itemsContext)
    const Navigate = useNavigate()

    return(
        <div>
            
           <div className={styles.container}>
            <div className={styles.buttonParant}>
                <button className={styles.button}></button>
                <div className={styles.today}>Categories</div>
            </div>
           </div>

           <div className={styles.flashContainer}>
             <div className={styles.flashParant} >
                <div className={styles.flash}>Browse By Category </div>
                <div></div>
            </div>
           </div>

           <div className={styles.itemContainer}>
           <div className={styles.itemParant}>
           <div className={styles.toButtons}>
               <button className={styles.buttons}><FaArrowLeft /></button>
               <button className={styles.buttons}><FaArrowRight /></button>
           </div>
           </div>
           </div>

           <div className={styles.containerofCategory}>
           <div className={styles.categoryContainer}>
            {category.map((item, index)=>(
                <div 
                onClick={()=>Navigate(`/categories/${item.name}`)}
                className={styles.categoryParant}
                key={index}>
                   <div className={styles.categoryPhoto}> {item.photo} </div>
                   <div className={styles.categoryName}> {item.name} </div>
                    </div>
            ))}
           </div>
           </div>

        </div> 
    )
} 