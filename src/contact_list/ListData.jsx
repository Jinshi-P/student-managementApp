import AppContext from "../context/AppContext"
import ListItem from "./ListItem"
import { useContext } from "react"

function ListData(){
   const {state}=useContext(AppContext)
return (
state?.students?.length>0
?
(state?.students?.filter((student) =>
            student?.name?.toLowerCase().includes(state?.search?.toLowerCase())
          )
?.map((student)=>{
   return <ListItem key={student.id} student={student}/>
}))
: (<h2 style={{textAlign:"center",margin:"5px"}}>{"No Contacts Found"}</h2>)
)
}
export default ListData