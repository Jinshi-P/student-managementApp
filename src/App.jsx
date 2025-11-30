import ListInput from "./contact_list/ListInput";
import ListData from "./contact_list/ListData";
import { useState,useRef,useEffect } from "react";

function App() {

  
    const contactRef = useRef()
//console.log(contactRef.current.value)
let studentsData=[
    { id:"jsp",name:"Jinshi",contact:9946525896},
    { id:"yra",name:"Yara", contact:9946525896},
    { id:"aym",name:"Ayman",contact:9946525896},
    { id:"sfd",name:"Saifudheen",contact:9946525896},
  ]
  const [students, setStudents] = useState(studentsData);

  const handleAddButton=(newStudent)=>{
        
        setStudents([newStudent,...students])
        contactRef.current.value

    }

const handleDletebtn=(studentId)=>{
 const updatedStudents=students?.filter((student)=>
student?.id!==studentId)
 console.log(`${studentId} is deleted`)
 setStudents([...updatedStudents])

}
const nameref=useRef("")
 useEffect(()=>{

    nameref.current.focus()    

    },[students])

  return (
    <div>
      <ListInput handleAddButton={handleAddButton} contactRef={contactRef} ref={nameref} />
      <ListData students={students}  handleDletebtn={handleDletebtn}/>
    </div>
  );
}
export default App;
