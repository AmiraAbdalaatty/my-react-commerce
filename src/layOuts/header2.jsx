import { useContext, useState } from 'react';
import  styles from './Header2.module.css'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import itemsContext from '../Contexts/itemsContext';

export default function Header2(){

    const {searchQuery, setSearchQuery, onSearch, user, signOut} = useContext(itemsContext)
    const [dropMenuVisible, setDropMenuVisible] = useState(false);
    const [profileActive, sertProfileActive ] = useState(false)

    const Navigate = useNavigate();
    const location = useLocation();

    const isActive = (route) => location.pathname === route

    const onSubmit = (e) => {
        e.preventDefault();
        Navigate(`/search?query=${searchQuery}`)
        onSearch()
        setSearchQuery('')
    };
    const onChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const toggling = () => {
        setDropMenuVisible(prev => !prev);
        sertProfileActive(prev => !prev);
    };

    return (
        <div className={styles.container}> 

        <div className={styles.container2}>
            <div className={styles.first}> <p>Exclusive</p> </div>

            <div className={styles.second}> 
                <div 
                 className={isActive('/') ? styles.active : ''}
                onClick={()=>Navigate('/')}>Home</div>
                <div 
                className={isActive('/Contact') ? styles.active : ''}
                onClick={()=>Navigate('/Contact')}>Contact</div>
                <div 
                className={isActive('/about') ? styles.active : ''}
                onClick={()=>Navigate('/about')}>About</div>
               {user && <div 
                className={isActive('/profile') ? styles.active : ''}
                onClick={()=>Navigate('/profile')}>Profile</div>}

                {!user ? <div onClick={()=>Navigate('/signup')} >
                    register
                </div> : null}
            </div>

            <form 
            onSubmit={onSubmit}
            className={styles.third}>
                 <input 
                 className={styles.thirdIn}
                 placeholder="What are you looking for?"
                 value={searchQuery}
                 onChange={onChange} /> 
           </form>

            <div className={styles.forth}>
                <FaRegHeart  onClick={()=>Navigate('/favorite')}/>
                <FiShoppingCart onClick={()=>Navigate('/cart')}/>
                <FaRegUser 
                onClick={toggling} 
                className={profileActive ? styles.activeIcon : ''}
                />
                {dropMenuVisible && (
                        <div className={styles.profileDropdown}>
                            <ul>
                                <li onClick={() => Navigate('/profile')}><FaRegUser/> Manage My Account</li>
                                <li onClick={() => Navigate('/cart')}><FiShoppingCart />My Orders</li>
                                <li onClick={() => Navigate('/favorite')}><FaRegHeart /> My Favorites</li>
                                <li onClick={() => Navigate('/')}><MdOutlineCancel /> My Cancellation</li>
                                <li onClick={() => Navigate('/')}><FaRegStar /> My Reviews</li>
                                <li onClick={() => Navigate('/')}><FaRegSave /> My WiChlist</li>
                                <li onClick={() => signOut()}><CiLogout /> My Logout</li>
                            </ul>
                        </div>
                    )}
            </div>
        </div>
        
        </div>

    )
}