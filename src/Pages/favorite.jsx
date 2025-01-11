import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import itemsContext from "../Contexts/itemsContext"
import styles from './favorite.module.css'

export default function Favorite(){

    const Navigate = useNavigate();

    const {favoritesItems, items} = useContext(itemsContext)
    const filteredItems = items.filter((item)=>item.bestSeller)


    return(
            <div className={styles.containerofcontainer}> 
            <div className={styles.container}>
                <div className={styles.fav}>Favorite ({favoritesItems.length})</div>
            {favoritesItems.map((item)=>(
                <div 
                onClick={()=>Navigate(`/itemdetails/${item.id}`)}
                key={item.id}
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
            <div className={styles.just}>
                <div className={styles.justLeft}>
               <button className={styles.button}></button>
                <div className={styles.today}>Just for you</div>
                </div>
                <div className={styles.justRight}><button className={styles.see}>See All</button></div>
            </div>
            
            <div className={styles.try}>
              {filteredItems.map((item, index)=>(
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
}