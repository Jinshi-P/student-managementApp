import ListItem from "./ListItem"

function ListData({students,handleDletebtn}){
return (
!students.length
? <p>{"No Contacts Found"}</p>
:students?.map((student)=>{
   return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
}))
}
export default ListData