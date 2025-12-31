import { forwardRef, useCallback, useState } from "react";
import Input from "../components/input";
import { IoIosPersonAdd } from "react-icons/io";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function ListInput() {
  const { contactRef, searchInput, setSearchInput, nameref ,students,setStudents} =
    useContext(AppContext);
  const [input, setInput] = useState("");

  const [inputError, setInputError] = useState("");
  const [contacterror, setcontacterror] = useState("");

  const handleAddClick = () => {
    if (input === "") {
      setInputError("Name required");
    } else {
      setInputError("");
    }
    if (contactRef.current.value === "") {
      setcontacterror("Contact required");
    } else {
      setcontacterror("");
    }

    if (input && contactRef.current.value) {
      setInputError("");
      setcontacterror("");
      const newStudent= {
          id: crypto.randomUUID(),
          name: input,
          contact: contactRef.current.value,
        }
 
    setStudents(
      [newStudent, ...students].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    );
    contactRef.current.value;
        setInput(""),
        (contactRef.current.value = "")
      
    }
  };

  const handleInput = useCallback((event) => {
    setInput(event.target.value);
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchInput(event.target.value);
  }, []);

  return (
    <div className="listinput">
      <div className="input">
        <div
          className="inputs"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              value={input}
              name="name"
              className="inputbox"
              type="text"
              placeholder="Enter your name . . ."
              onChange={handleInput}
              ref={nameref}
              error={inputError}
            />
            <span style={{ color: "red" }}>{inputError}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              type="tel"
              name="contact"
              className="inputbox"
              ref={contactRef}
              placeholder="Enter your contact number . . ."
              error={contacterror}
            />
            <span style={{ color: "red" }}>{contacterror}</span>
          </div>
        </div>
        <div style={{ alignContent: "center" }}>
          <button className="addbtn" title="Add contact" onClick={handleAddClick}>
            <IoIosPersonAdd />
          </button>
        </div>
      </div>

      <Input
        type="text"
        name="search"
        className="searchInput"
        value={searchInput}
        placeholder="Search here . . ."
        onChange={handleSearch}
      />
    </div>
  );
}

export default ListInput;
