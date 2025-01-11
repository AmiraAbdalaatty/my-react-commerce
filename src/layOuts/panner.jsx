import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import panner1 from '../pics/panner1.png';
import panner2 from '../pics/panner2.jpeg';
import panner3 from '../pics/panner3.jpeg';



import styles from './panner.module.css'

export default function Panner(){

    const settings = {
        dots: true,              
        infinite: true,           
        speed: 1000,               
        slidesToShow: 1,          
        slidesToScroll: 1,        
        autoplay: true,          
        autoplaySpeed: 5000,      
        arrows: true,            
      };



    return(
        <div className={styles.panner}>
          <Slider {...settings}>
            <div>
             <img src={panner2} alt="Panner 2" className={styles.pannerPhoto} />
            </div>
            <div>
              <img src={panner1} alt="Panner 1" className={styles.pannerPhoto} />
            </div>
            <div>
              <img src={panner3} alt="Panner 3" className={styles.pannerPhoto} />
            </div>
          </Slider>
        </div>
      );

} 