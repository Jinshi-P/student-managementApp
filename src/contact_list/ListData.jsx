import ListItem from "./ListItem";
import useAppContext from "../hooks/useAppContext";

function ListData() {
  const { state } = useAppContext();
  return (
  <div className="contacts">
    
   {state?.students?.length > 0 ? (
    state?.students
      ?.filter((student) =>
        student?.name?.toLowerCase().includes(state?.search?.toLowerCase())
      )
      ?.map((student) => {
        return <ListItem key={student.id} student={student} />;
      })
  ) : (
    <h2 style={{ textAlign: "center", margin: "5px" }}>
      {"No Contacts Found"}
    </h2>
  )}

  </div>)
}
export default ListData;
