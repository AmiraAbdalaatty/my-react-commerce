import styles from './Header1.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header1(){
    const Navigate = useNavigate();

    return <div onClick={()=>Navigate('/product')} className={styles.header}>Summer Sale For All Suim Suits And Free Express Delivery - OFF 50%!<strong className={styles.word}>  Shop Now</strong></div>

};