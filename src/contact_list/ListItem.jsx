import { MdDelete } from "react-icons/md";
import useAppContext from "../hooks/useAppContext";
function ListItem({ student }) {
  const { dispatch } = useAppContext();

  const handleDletebtn = (studentId) => {
    dispatch({ type: "delete-student", payload: studentId });
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
