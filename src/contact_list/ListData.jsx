import ListItem from "./ListItem"

function ListData({students,handleDletebtn,searchInput,searchDisplay}){
return (
!students.length
? <p>{"No Contacts Found"}</p>
:
searchInput ? searchDisplay?.map((student)=>{
   return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
})
:
students?.map((student)=>{
   return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
}))
}
export default ListData