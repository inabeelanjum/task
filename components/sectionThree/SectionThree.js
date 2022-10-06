import React, { useState , useEffect } from 'react';
import style from "./SectionThree.module.css"
import car from "../../public/car.png";
import consolePic from "../../public/consolePic.png";
import banana from "../../public/banana.png";
import headphone from "../../public/headphone.png";
import shoe from "../../public/shoe.png";
import tulsi from "../../public/tulsi.png";
import Image from 'next/image'
export default function SectionThree() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  console.log(data)
 
  if (isLoading) {
    console.log(isLoading);
  }
  else{
    console.log(data)
    return (
      <>
      {data? 
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
           <h3>{data[0][0]?.product_name}</h3>
           <h4>£{data[0][0]?.price}</h4>
         </div>
       </div>
       <div className={style.boxMain}>
         <div className={style.boxInside}>
         <Image  
       src={consolePic}
       alt="Picture of the author"
       width={370}
       height={314}
     />
         </div>
         <div className={style.textMain}>
           <h3>{data[0][1]?.product_name}</h3>
           <h4>£{data[0][1]?.price}</h4>
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
           <h3>{data[0][2]?.product_name}</h3>
           <h4>£{data[0][2]?.price}</h4>
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
           <h3>{data[0][3]?.product_name}</h3>
           <h4>£{data[0][3]?.price}</h4>
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
           <h3>{data[0][4]?.product_name}</h3>
           <h4>£{data[0][4]?.price}</h4>
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
       <h3>{data[0][5]?.product_name}</h3>
           <h4>£{data[0][5]?.price}</h4>
         </div>
       </div>
      </div>
      <p>Load More</p>
       </div> : "" }
       </>
    )
  }
  }