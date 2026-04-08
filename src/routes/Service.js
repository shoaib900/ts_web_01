import React, { useCallback, useState } from 'react'
import Shahwaiz from '../components/Shahwaiz'

const Service = () => {
    const [count, setCount] = useState(0)

    console.log("Parent component")

    // const inc = () => {
    //     setCount(count + 1)
    // }

    const inc = useCallback( ()=> {
        setCount(count + 1)
    },[count])

    return (
        <div>
            <h1>count number : {count}</h1>

            <button onClick={inc}>add by 1</button>

            <Shahwaiz />

        </div>
    )
}

export default Service

