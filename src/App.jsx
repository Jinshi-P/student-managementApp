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
  const [students, setStudents] = useState(
    studentsData.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    )
  );
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const contactRef = useRef();
  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, []);

  // useEffect(() => {
  //   if (searchInput) {
  //     setSearchDisplay([...students?.filter((student) =>
  //         student?.name?.toLowerCase().includes(searchInput?.toLowerCase())
  //       )]);

  //   }
  // }, [searchInput]);

  const handleAddButton = (newStudent) => {
    setStudents(
      [newStudent, ...students].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    );
    contactRef.current.value;
  };

  const handleDletebtn = (studentId) => {
    const updatedStudents = students?.filter(
      (student) => student?.id !== studentId
    );

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
        <ListData
          searchDisplay={searchDisplay}
          searchInput={searchInput}
          students={students?.filter((student) =>
            student?.name?.toLowerCase().includes(searchInput?.toLowerCase())
          )}
          handleDletebtn={handleDletebtn}
        />
      </div>
    </div>
  );
}
export default App;
