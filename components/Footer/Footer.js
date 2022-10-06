import style from "./Footer.module.css"
import footer from "../../public/footer.svg";
import Image from 'next/image';
import telegram from "../../public/telegram.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import facebook from "../../public/facebook.svg";
import tiktok from "../../public/tiktok.svg";
import youtube from "../../public/youtube.svg";







export default function Footer() {
    return (
      <div className={style.main} >
<div className={style.left}>
<div className={style.logoHeading}>
      <div className={style.logo}>CHILLED GRAPE</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
      </div>
        <div className={style.svgBottom}> 
     <Image  
      src={footer}
      alt="Picture of the author"
      width={640}
      height={640}
    />
    
     </div>
     
     
      </div>
      <div className={style.right}>
      <div className={style.company}>
  <a href="#" className={style.heading} >Company</a>
  <a href="#">About</a>
  <a href="#">Careers</a>
  <a href="#">Our Work</a>
  <a href="#">Contact</a>
  </div>
  <div className={style.products}>
  <a href="#"  className={style.heading}>Products</a>
  <a href="#">About</a>
  <a href="#">Careers</a>
  <a href="#">Our Work</a>
  <a href="#">Contact</a>
  </div>
  <div className={style.icons}>
  <a href="#" className={style.heading} >Follow Us</a>
  <div className={style.rowOne}>
  <Image  
      src={telegram}
      alt="Picture of the author"
      width={45}
      height={45}
    />

<Image  
      src={twitter}
      alt="Picture of the author"
      width={45}
      height={45}
    />
    <Image  
      src={youtube}
      alt="Picture of the author"
      width={45}
      height={45}
    />
  </div>
  <div className={style.rowOne}>
  <Image  
      src={facebook}
      alt="Picture of the author"
      width={45}
      height={45}
    />

<Image  
      src={instagram}
      alt="Picture of the author"
      width={45}
      height={45}
    />
    <Image  
      src={tiktok}
      alt="Picture of the author"
      width={45}
      height={45}
    />
  </div>
 

  </div>


      </div>
      </div>
    )
  }