import React, { useState } from 'react'
import style from "./about.module.css"
const About = () => {
  const [data,setData] = useState([]);


  React.useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
     .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
  },[]);

  console.log(data)

  return (
    <div>
        <h1>About page</h1>
        <div className={style.container}>
        {
          data.map( (item,index)=>{
            return(
              <div className={style.card}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <img src={item.images[0]} height={200} alt="" />

              </div>
            )
          })
        }
        </div>
      
    </div>
  )
}

export default About
