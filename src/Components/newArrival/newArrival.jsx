import styles from './newArrival.module.css'
import { useNavigate } from 'react-router-dom'

export default function NewArrival(){
    
  const Navigate = useNavigate()

 return(
<div className={styles.container}>
 <div className={styles.container2}>

   <div className={styles.buttonParant}>
    <button className={styles.button}></button>
    <div className={styles.today}>Featured</div>
   </div>

   <div className={styles.flashParant} >
      <div className={styles.flash}>New Arrival </div>
    </div>

<div className={styles.divParant}>
  <div className={styles.leftItem}>
        <h3 className={styles.cardName}>PlayStation 5</h3>
        <p className={styles.cardDescription}>Black and White version of the PS5 coming out on sale.</p>
        <button 
        onClick={()=>Navigate('/product')}
        className={styles.cardButton}>Buy Now</button>
  </div>
  <div className={styles.rightContainer}>
    <div className={styles.topRightItem}>
          <h3 className={styles.cardName}>Women's Collections</h3>
          <p className={styles.cardDescription}>Featured woman collections that give you another vibe.</p>
          <button 
          onClick={()=>Navigate('/product')}
          className={styles.cardButton}>Buy Now</button>
    </div>
    <div className={styles.bottomRightItems}>
      <div className={styles.bottomItem1}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardName}>Speakers</h3>
            <p className={styles.cardDescription}>Amazon Wireless Speakers</p>
            <button 
            onClick={()=>Navigate('/product')}
            className={styles.cardButton}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className={styles.bottomItem2}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardName}>Perfume</h3>
            <p className={styles.cardDescription}>Gucci intense oud Edp</p>
            <button 
            onClick={()=>Navigate('/product')}
            className={styles.cardButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
 </div>
</div>
 )
}