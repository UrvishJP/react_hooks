import React,{useRef} from 'react'

const UseRef = () => {

    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.value = ""
    }
    
  return (
    <div>
        <h1>Urvish</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef


//UseRef can be used to access a DOM element directly.