import React,{useState} from 'react'

const UseState = () => {

    const [counter, setCounter] = useState(0)  

    const increment = () => {
        setCounter(counter + 1)
    }

  return (
    <div>
        {counter}
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseState


//UseState is used for updating the thing/state in real time.