import { useParams } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import itemsContext from "../Contexts/itemsContext"
import styles from './categoriesDetails.module.css'
import Categories from "../Components/categories/categories"

export default function CategoriesDetails(){
   const Navigate = useNavigate();

    const {CategoryName} = useParams(); 

    const { items } = useContext(itemsContext);

    const filteredCategory = items.filter(item => item.category == CategoryName);
    
    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                
                {filteredCategory.length > 0 ? (
                    filteredCategory.map((item, index) => (
                        <div 
                        onClick={()=>Navigate(`/itemdetails/${item.id}`)}
                        key={index} className={styles.cardParant}>
                            <div className={styles.cardPhotoHolder}>
                                <img src={item.photo} alt={item.name} className={styles.cardPhoto} />
                            </div>
                            <div className={styles.cardName}>{item.name}</div>
                            <div className={styles.disParant}>
                                <div className={styles.afterDis}>${item.afterDis}</div>
                                <div className={styles.peforeDis}>${item.peforeDis}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No items found for this category</div> 
                )}
            </div>
        </div>
    );
}