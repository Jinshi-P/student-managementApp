
function ListItem({student,handleDletebtn}){
return (
    <div>    
      {student?.name}<button onClick={()=>handleDletebtn(student.id)}>Delete</button>
   </div>
)}
export default ListItem