import ListInput from "./contact_list/ListInput"
import ListData from "./contact_list/ListData";
import { useState } from "react";

function App() {

  const [students,setStudents]=useState([ 
    {id:"jsp",
     name:"Jinshi "},

      {id:"yra",
     name:"Yara "},

      {id:"aym",
     name:"Ayman "},

      {id:"sfd",
     name:"Saifudheen "}
           ])
 

  return (
    <div>
      <ListInput setStudents={setStudents} students={students}/>
      <ListData students={students} />
    </div>
  )}
export default App
