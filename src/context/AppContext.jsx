import { createContext } from "react";
import { useState, useRef, useEffect } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
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

  const [searchInput, setSearchInput] = useState("");
  const contactRef = useRef();
  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchInput,
        setSearchInput,
        contactRef,
        nameref,
        students,
        setStudents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
