import { useState } from "react"



function ListInput({handleAddButton}){
const [input,setInput]=useState("")

 
    const handleInput=(event)=>{
        setInput(event.target.value) 
    }

    

    return(
        <div>
        <input value={input} type="text" placeholder="Enter your name"  onChange={handleInput}/>
        <button onClick={()=>{handleAddButton(
            {
            id:crypto.randomUUID(),
            name:input
        },
        setInput("")
        )
        }}>Add</button>
        </div>
    )


}

export default ListInput