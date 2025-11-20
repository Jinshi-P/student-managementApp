import ListItem from "./ListItem"

function ListData({students}){
return (
students?.map((student)=>{
   return <ListItem key={student.id} name={student.name}/>
}))
}
export default ListData