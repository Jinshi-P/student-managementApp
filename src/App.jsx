import ListInput from "./contact_list/ListInput";
import ListData from "./contact_list/ListData";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id:"jsp",name:"Jinshi"},
    { id:"yra",name:"Yara"},
    { id:"aym",name:"Ayman"},
    { id:"sfd",name:"Saifudheen"},
  ]);

  const handleAddButton=(newStudent)=>{
        
        setStudents([...students,newStudent])
    }

  return (
    <div>
      <ListInput handleAddButton={handleAddButton} />
      <ListData students={students} />
    </div>
  );
}
export default App;
