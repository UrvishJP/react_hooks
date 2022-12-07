import React,{useState} from 'react'

const UseState2 = () => {

    const [inputValue, setinputValue] = useState("Urvish")

    let inputChange = (event) => {
        
        const newValue = event.target.value

        setinputValue(newValue)
    }

  return (
    <div>
        <input placeholder='enter something...' onChange={inputChange}/>
        {inputValue}
    </div>
  )
}

export default UseState2