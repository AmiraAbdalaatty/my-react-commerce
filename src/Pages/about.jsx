import styles from './about.module.css'
import Details from '../Components/details/details'
import aboutPhoto from '../pics/about.webp'
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";

export default function About(){
    const seals = [
        {
            name: '10.5K',
            photo: <IoIosPhonePortrait />,
            dec: 'Sellers active on our site'
        },
        {
            name: '33K',
            photo: <RiComputerLine />,
            dec: 'Monthly Product Sales'  
        },
        {
            name: '45.5K',
            photo: <BsSmartwatch />,
            dec: 'Customers active on our site'
        },
        {
            name: '25K',
            photo: <IoCameraOutline />,
            dec: 'Annual gross sales on our site'

        }  
    ];
    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <h1 className={styles.title}>Our Story</h1>
                        <p className={styles.paragraf}>Launched in 2024, Exclusive is Iraq's premier online shopping marketplace, serving customers nationwide. With a strong focus on personalized marketing, advanced data analytics, and comprehensive service solutions, Exclusive supports over 10,500 sellers and 300 brands, reaching 3 million customers across the country.
                         Exclusive offers an extensive selection of over 1 million products, constantly expanding to meet the diverse needs of its customers. From electronics to fashion, and home goods to beauty products, Exclusive provides a wide array of categories to choose from.</p>
                    </div>
                    <div className={styles.div1right}>
                        <img src={aboutPhoto} alt='about photo'/>
                    </div>
                </div>

                <div className={styles.div2}>

                {seals.map((item, index)=>(
                <div 
                className={styles.categoryParant}
                key={index}>
                   <div className={styles.categoryPhoto}> {item.photo} </div>
                   <div className={styles.kategoryName}> {item.name} </div>
                   <div className={styles.dec}> {item.dec}</div>
                    </div>
                   ))}

                </div>

                <div className={styles.div3}></div>
                <div className={styles.div4}><Details /></div>

            </div>
        </div>
    )
}