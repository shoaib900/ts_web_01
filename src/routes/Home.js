import React,{useState} from 'react'
import Button from '../components/Button'

const Home = () => {
  const [count,setCount] = useState(0)
  const [errmsg,setErrmsg] = useState("");

  function dec(){
    if(count === 0){
      setCount(0);
      console.log("that value can't be -ive")
      setErrmsg("that value can't be -ive")
    }else{
      setCount(count - 1)
    }
  }
  return (
    <div className='container-fluid'>

      <Button> Submit</Button>

        <h1>Home page {count} </h1>
        <span style={{color:"red"}}>{errmsg} </span><br />

        <button onClick={()=> {setCount(count + 1); setErrmsg("")}}>add by 1</button>
        <button onClick={dec}>Decrement by 1</button>
      
    </div>
  )
}

export default Home
