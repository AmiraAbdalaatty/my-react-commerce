import styles from './contact.module.css'
import { useState } from 'react'

export default function Contact(){

    const [formDeata, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        massage:'',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setFormData({
            ...formDeata, [id]:value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            name: '',
            email: '',
            phone:'',
            massage:'',
        });
        console.log(formDeata)

        alert('Thank you for your massage')
        
    };

    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.divParant}>
                    <div className={styles.leftDiv}>
                        <div className={styles.leftUp}>
                            <h2>Call To Us</h2>
                            <p>We are available 24/7, 7 days a week.</p>
                            <div>Phone</div>
                            <div>+8801611112222</div>
                        </div>
                        <div className={styles.leftDown}>
                            <h2>Write To Us</h2>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <div>Customers Email:</div>
                            <div> customer@exclusive.com</div>
                        </div>

                    </div>

                        <form onSubmit={handleSubmit}
                        className={styles.rightDiv}>

                        <div className={styles.rightUp}>
                            <input 
                            className={styles.smallInbut}
                            placeholder='Your name'
                            id='name'
                            type='text'
                            value={formDeata.name}
                            onChange={handleChange}
                            required/>
                            <input 
                            className={styles.smallInbut}
                            placeholder='Your Email'
                            id='email'
                            type='email'
                            value={formDeata.email}
                            onChange={handleChange}
                            required/>
                            <input 
                            className={styles.smallInbut}
                            placeholder='Your Phone'
                            id='phone'
                            type='text'
                            value={formDeata.phone}
                            onChange={handleChange}
                            required/>
                        </div>
                        <div className={styles.rightMiddle}>
                            <textarea 
                            className={styles.yourMassage}
                            placeholder='Your message'
                            id='massage' name='massage' rows={8}
                            value={formDeata.massage}
                            onChange={handleChange} ></textarea>
                        </div>
                        <div className={styles.rightButton}>
                            <button className={styles.reset} type='reset'>Reset</button>
                            <button className={styles.sendMessage} type='submit'>Send Message</button>
                        </div>

                        </form>

                </div>
            </div>
        </div>
    )
}