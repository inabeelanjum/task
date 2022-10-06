import style from "./SectionTwo.module.css"
import plantB from "../../public/plantB.svg";
import plant from "../../public/plant.png";
import Image from 'next/image'
export default function SectionTwo() {
    return (
      <div className={style.main}>
       <div className={style.left}>
        <h2 className={style.title}>
        Lorem ipsum dolor sit amet.
        </h2>
        <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button type="button" className={style.rmButton}>Read More</button>
       </div>
       <div className={style.right}>
        <div className={style.plantB}>
       <Image  
      src={plantB}
      alt="Picture of the author"
      width={566}
      height={516}
    />
    </div>
    <div className={style.plant}>
         <Image  
      src={plant}
      alt="Picture of the author"
      width={624}
      height={790}
    />
    </div>
    </div>
      </div>
    )
  }