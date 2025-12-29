import ListInput from "./contact_list/ListInput";
import ListData from "./contact_list/ListData";
import { useState, useRef, useEffect } from "react";


function App() {
  let studentsData = [
    { id: "jsp", name: "Jinshi", contact: 9946525896 },
    { id: "yra", name: "Yara", contact: 9946525896 },
    { id: "aym", name: "Ayman", contact: 9946525896 },
    { id: "sfd", name: "Saifudheen", contact: 9946525896 },
  ];
  const [students, setStudents] = useState(studentsData);
  const[searchDisplay,setSearchDisplay]=useState([])
  const [searchInput, setSearchInput] = useState("");
  const contactRef = useRef();
  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, []);

  useEffect(() => {
    if (searchInput) {
      setSearchDisplay([...students?.filter((student) =>
          student?.name?.toLowerCase().includes(searchInput?.toLowerCase())
        )]);
    console.log(searchDisplay)
    } else {
    
      setStudents([...students]);
      console.log(students)
    }
  }, [searchInput]);

  const handleAddButton = (newStudent) => {
    setStudents([newStudent, ...students]);
    contactRef.current.value;
    console.log(studentsData);
  };

  const handleDletebtn = (studentId) => {
    const updatedStudents = students?.filter(
      (student) => student?.id !== studentId
    );
    console.log(`${studentId} is deleted`);
    setStudents([...updatedStudents]);
  };

  return (
    <div className="container">
      <div className="element">
        <ListInput
          handleAddButton={handleAddButton}
          contactRef={contactRef}
          ref={nameref}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <ListData  searchDisplay={searchDisplay} searchInput={searchInput} students={students} handleDletebtn={handleDletebtn} />
      </div>
    </div>
  );
}
export default App;
