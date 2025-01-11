import styles from './details.module.css';
import fastDelivery from '../../pics/fastDelivery.webp';
import custumerService from '../../pics/custumerService.webp';
import moneyBack from "../../pics/moneyBack.webp"




export default function Details(){

    const Cards = [
        {
            photo: fastDelivery,
            name: 'FREE AND FAST DELIVERY',
            des: 'Free delivery for all orders over $140',
            id: 1
        },
        {
            photo: custumerService,
            name: '24/7 CUSTOMER SERVICE',
            des: 'Friendlty 24/7 customer support',
            id: 2
       },
        {
            photo: moneyBack,
            name: 'MONEY BACK GURANTEE',
            des: 'We return money within 30 days',
            id: 3
       }
    ]

    return(
        <div className={styles.container}>
            <div className={styles.container2}>
            
            {Cards.map((item)=>(

                <div 
                key={item.id}
                className={styles.cardParant}>

                    <div className={styles.Photo}> <img src={item.photo} alt={item.id}/> </div>
                    <div className={styles.name}> {item.name} </div>
                    <div className={styles.des}> {item.des} </div>

                </div>
        ))}
          </div>
        </div>
    )
}