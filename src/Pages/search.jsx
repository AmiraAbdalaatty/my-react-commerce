import styles from './search.module.css'
import { useContext } from "react"
import itemsContext from "../Contexts/itemsContext"
import { useNavigate } from 'react-router-dom'

export default function Search(){
    const { searchList } = useContext(itemsContext)
    const Navigate = useNavigate();


    return (
        <div className={styles.container}>
            {searchList.length > 0 ? (
                <div className={styles.try}>
                    {searchList.map((item) => (
                        <div 
                        onClick={() => Navigate(`/itemdetails/${item.id}`)}
                        key={item.id} className={styles.container2}>
                            <div className={styles.cardParent}>
                                <div className={styles.cardPhotoHolder}>
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className={styles.cardPhoto}
                                    />
                                </div>
                                <div className={styles.cardName}>{item.name}</div>
                                <div className={styles.disParent}>
                                    <div className={styles.afterDis}>${item.afterDis}</div>
                                    <div className={styles.beforeDis}>${item.peforeDis}</div>
                                </div>
                            </div>
                        </div>
                    
                    ))}
                </div>
            ) : (
                <div className={styles.noResults}>
                    <h2>No results found</h2>
                </div>
            )}
        </div>
    );
}