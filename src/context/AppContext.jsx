import { createContext, useReducer } from "react";

const AppContext = createContext();
let studentsData = {
  search: "",
  students: [
    { id: "jsp", name: "Jinshi", contact: 9946525896 },
    { id: "yra", name: "Yara", contact: 9946525896 },
    { id: "aym", name: "Ayman", contact: 9946525896 },
    { id: "sfd", name: "Saifudheen", contact: 9946525896 },
  ].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      return {
        ...state,
        students: [...state.students, action?.payload].sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        ),
      };

    case "delete-student":
      return {
        ...state,
        students: state?.students?.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "search":
      return { ...state, search: action?.payload };

    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, studentsData);



  return (
    <AppContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
