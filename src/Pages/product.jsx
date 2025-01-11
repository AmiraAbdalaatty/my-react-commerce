import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import itemsContext from "../Contexts/itemsContext"
import styles from './product.module.css'

export default function Product(){

    const { items } = useContext(itemsContext)
    
    const Navigate = useNavigate();



    return( 
        <div className={styles.container}> 
           <div className={styles.container2}>

            {items.map((item,index)=>(
                <div 
                onClick={()=>Navigate(`/itemdetails/${item.id}`)}
                key={index}> 
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

    )
}