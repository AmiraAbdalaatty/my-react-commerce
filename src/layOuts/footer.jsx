import styles from './Footer.module.css'
import { LuSendHorizonal } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

export default function Footer(){
    
    return(
        <div className={styles.container}> 
        <div className={styles.container2}>
            <div className={styles.footerTop}>

                <div>
                    <div>Exclusive</div>
                    <div>Subscribe</div>
                    <div>get 10% off your first order</div>
                    <input type="text" placeholder="Enter your email" className={styles.input}/>
                </div>

                <div>
                    <div>Support</div>
                    <ul>
                        <li>Cairo, Egypt</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-8888-9999</li>
                    </ul>
                </div>

                <div>
                    <div>Account</div>
                    <ul>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                <div>
                    <div>Quick Link</div>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <div>Download App</div>
                    <div>Save $3 with App New User Only</div>
                    <div className={styles.icons}>
                     <CiFacebook />
                     <SlSocialTwitter />
                     <FaInstagram />
                     <BsTiktok />
                    </div>
                </div>
                
            </div>

            <div className={styles.footerButton}>Web Site Designed by <strong>Amira Atty</strong>And Coded By <strong>Amira Atty</strong></div>
            </div>
        </div>
    )
}