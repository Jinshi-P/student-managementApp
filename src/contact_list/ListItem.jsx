import { MdDelete } from "react-icons/md";
function ListItem({student,handleDletebtn}){
return (
   <>
   
    <div style={{display:"flex",justifyContent:"space-between",border:".5px solid white",padding:".5em" ,scrollTop:""}}>  
      <div><h4>{student?.name}</h4><p>{student?.contact}</p></div>
      <div> <button onClick={()=>handleDletebtn(student?.id)}> <MdDelete /></button></div>

        
     
   </div>

   </>
)}
export default ListItem