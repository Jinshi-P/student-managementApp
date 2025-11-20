import { useState } from "react"



function ListInput({setStudents,students}){
const [input,setInput]=useState("")
 
    const handleInput=(event)=>{
        setInput(event.target.value) 
    }

    const handleAddButton=()=>{
        console.log("Added successfully")
        setStudents([...students,
        {
            id:crypto.randomUUID(),
            name:input
        }])

    }

    return(
        <div>
        <input type="text" placeholder="Enter your name"  onChange={handleInput}/>
        <button onClick={handleAddButton}>Add</button>
        </div>
    )


}

export default ListInput