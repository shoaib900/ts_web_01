import React,{memo,useMemo,useState} from 'react'

function Shahwaiz() {
    const [value,setValue] = useState(0);
    const [number,setNumber ] = useState(5);


    // console.log("hello child component")

    const multiply = ()=> {
        setNumber(number * 5)
    }

    // const sum = ()=> {
    //     console.log("sum method is called...")
    //     return number + 5
    // }

    const sum = useMemo( ()=> {
        console.log("sum method is called...")
         return number + 5
    },[number]) 
  return (
    <div>
        <h1> hello world this is a child component {sum}</h1>
        <p>value : {value} and the number : {number}</p>
        <button onClick={()=> setValue(value + 1)}>increase the value</button>
        <button onClick={multiply}>multiply by number</button>
      
    </div>
  )
}

export default memo(Shahwaiz)
