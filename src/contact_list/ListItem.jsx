import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import AppContext from "../context/AppContext";
function ListItem({ student }) {

  const {dispatch } = useContext(AppContext);

  const handleDletebtn = (studentId) => {
   dispatch({type:"delete-student",payload:studentId})
  
   
   //  const updatedStudents = students?.filter(
   //    (student) => student?.id !== studentId
   //  );
   //  setStudents([...updatedStudents]);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: ".5px solid white",
          padding: ".5em",
   
        }}
      >
        <div>
          <h4>{student?.name}</h4>
          <p>{student?.contact}</p>
        </div>
        <div>
          {" "}
          <button title="Delete" onClick={() => handleDletebtn(student?.id)}>
            {" "}
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
export default ListItem;
