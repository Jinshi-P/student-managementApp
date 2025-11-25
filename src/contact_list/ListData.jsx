import ListItem from "./ListItem"

function ListData({students,handleDletebtn}){
return (
students?.map((student)=>{
   return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
}))
}
export default ListData