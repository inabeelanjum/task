import style from "./Background.module.css"
import TopLeft from "../../public/TopLeft.svg";
import Mid from "../../public/Mid.svg";
import RightT from "../../public/RightT.svg";
import RightB from "../../public/RightB.svg";
import LeftB from "../../public/LeftB.svg";


import Image from 'next/image'
export default function Background() {
    return (
      <div >
        <div className={style.containerT}>
        <div className={style.mainNav}>
  <div className={style.logo}>CHILLED GRAPE</div>
 <div class={style.navbar}>
  <a class={style.anchor} href="#"> Home</a> 
  <a class={style.anchor} href="#"> About</a> 
  <a class={style.anchor} href="#"> Blog</a> 
  <a class={style.anchor} href="#"> Pricing</a>
  <button type="button" className={style.loginButton}>Login</button>
</div>
</div>
          <div className={style.topLeft}>
  <Image  
      src={TopLeft}
      alt="Picture of the author"
      width={566}
      height={450}
    />
 </div>
 
 <div className={style.mid}>
     <Image  
      src={Mid}
      alt="Picture of the author"
      width={332}
      height={260}
    />
   </div>
   </div>
    <div className={style.containerB}>
    <div className={style.leftB}>
      <Image  
      src={LeftB}
      alt="Picture of the author"
      width={372}
      height={326}
    />
    </div>
    <div className={style.rightMain}>
    <div className={style.right}>
    <Image  
      src={RightT}
      alt="Picture of the author"
      width={566}
      height={516}
    />
      <div className={style.rightB}>
        <Image  
      src={RightB}
      alt="Picture of the author"
      width={427}
      height={320}
    />
    </div>
</div>
    
   </div>
</div>
    

  
       <h1 className={style.main}>header background</h1>
      </div>
    )
  }