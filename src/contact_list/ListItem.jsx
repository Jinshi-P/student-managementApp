
function ListItem({student,handleDletebtn}){
return (
    <div>  
        
      {student?.name}<p>{student?.contact}</p><button onClick={()=>handleDletebtn(student?.id)}> Delete</button>
   </div>
)}
export default ListItem