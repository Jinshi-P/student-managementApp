import ListItem from "./ListItem"

function ListData({students,handleDletebtn,searchInput,searchDisplay}){
return (
!students.length 
? <h2 style={{textAlign:"center",margin:"5px"}}>{"No Contacts Found"}</h2>
// :
// searchInput ? searchDisplay?.map((student)=>{
//    return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
// })

:
students?.map((student)=>{
   return <ListItem key={student.id} student={student} handleDletebtn={handleDletebtn}/>
}))
}
export default ListData