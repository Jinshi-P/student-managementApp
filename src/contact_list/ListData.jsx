import AppContext from "../context/AppContext"
import ListItem from "./ListItem"
import { useContext } from "react"

function ListData(){
   const {students,searchInput}=useContext(AppContext)
return (
students.length>0
?
(students?.filter((student) =>
            student?.name?.toLowerCase().includes(searchInput?.toLowerCase())
          )
?.map((student)=>{
   return <ListItem key={student.id} student={student}/>
}))
: (<h2 style={{textAlign:"center",margin:"5px"}}>{"No Contacts Found"}</h2>)
)
}
export default ListData