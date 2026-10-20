import { MdDelete } from "react-icons/md";
import useAppContext from "../hooks/useAppContext";
function ListItem({ student }) {
  const { dispatch } = useAppContext();

  const handleDletebtn = (studentId) => {
    dispatch({ type: "delete-student", payload: studentId });
  };
  return (
    <>
      <div className="contact-list">
        <div>
          <h4 className="contact-list-name">{student?.name}</h4>
          <p className="contact-list-contact">{student?.contact}</p>
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
