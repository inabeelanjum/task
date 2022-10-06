import style from "./SectionThree.module.css"
import car from "../../public/car.png";
import console from "../../public/console.png";
import banana from "../../public/banana.png";
import headphone from "../../public/headphone.png";
import shoe from "../../public/shoe.png";
import tulsi from "../../public/tulsi.png";





import Image from 'next/image'
export default function SectionThree() {
    return (
      <div className = {style.main}>
     <div className={style.rowOne}>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={car}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={console}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={banana}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
     </div>
     <div className={style.rowOne}>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={headphone}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={shoe}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
      <div className={style.boxMain}>
        <div className={style.boxInside}>
        <Image  
      src={tulsi}
      alt="Picture of the author"
      width={370}
      height={314}
    />
        </div>
        <div className={style.textMain}>
          <h3>consectetur Elit</h3>
          <h4>£12.99</h4>
        </div>
      </div>
     </div>
     <p>Load More</p>
      </div>
    )
  }