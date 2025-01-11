import SidePar from "../layOuts/sidePar";
import Panner from "../layOuts/panner";
import styles from "./parant.module.css"
import FlashSale from "../Components/FlashSale/flashSale";
import Categories from "../Components/categories/categories";
import BestSelling from "../Components/bestSelling/bestSelling"; 
import Explore from "../Components/explore/explore";
import Details from "../Components/details/details";
import NewArrival from "../Components/newArrival/newArrival";

export default function HomePage(){
    return(
        <div>
            <div className={styles.parant}>
            <SidePar />
            <Panner />
            </div>
            <FlashSale />
            <Categories />
            <BestSelling />
            <Explore />
            <NewArrival />
            <Details />
        </div>
    );    
};