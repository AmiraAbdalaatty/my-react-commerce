import styles from './sidePar.module.css';
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

export default function SidePar() {
    const [expand, setExpand] = useState(null);

    const toggling = (category) => {
        setExpand(prevState => prevState === category ? null : category);
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidePar}>
                <h4 className={styles.header}>Explore Our Collections</h4>
                <ul className={styles.list}>
                  
                    <li onClick={() => toggling('Woman’s Fashion')}>
                        Woman’s Fashion    
                        {expand === 'Woman’s Fashion' ? (
                            <FaChevronDown />
                        ) : (
                            <FaChevronRight />
                        )}
                    </li>
                    {expand === 'Woman’s Fashion' && (
                        <ul>
                            <li>Elegant Dress</li>
                            <li>Chic Blouse</li>
                            <li>Statement Handbag</li>
                        </ul>
                    )}
                    <li onClick={() => toggling('Men’s Fashion')}>
                        Men’s Fashion
                        {expand === 'Men’s Fashion' ? (
                            <FaChevronDown />
                        ) : (
                            <FaChevronRight />
                        )}
                    </li>
                    {expand === 'Men’s Fashion' && (
                        <ul>
                            <li>Tailored Suit</li>
                            <li>Casual Shirts</li>
                            <li>Leather Accessories</li>
                        </ul>
                    )}
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports</li>
                    <li>Baby & Toys</li>
                    <li>Groceries</li>
                    <li>Health</li>
                </ul>
            </div>
        </div>
    );
}