import { useCallback, useState, useRef, useEffect } from "react";
import Input from "../components/input";
import { IoIosPersonAdd } from "react-icons/io";
import useAppContext from "../hooks/useAppContext";

function ListInput() {
  const { state, dispatch } = useAppContext();
  const [input, setInput] = useState("");
  const [contactInput, setContactInput] = useState("");

  const [inputError, setInputError] = useState("");
  const [contacterror, setcontacterror] = useState("");

  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, [state?.students]);

  const handleAddClick = () => {
    if (input == "") {
      setInputError("Name required");
    } else {
      setInputError("");
    }
    if (contactInput === "") {
      setcontacterror("Contact required");
    } else {
      setcontacterror("");
    }

    if (input && contactInput) {
      setInputError("");
      setcontacterror("");
      const newStudent = {
        id: crypto.randomUUID(),
        name: input,
        contact: contactInput,
      };

      dispatch({ type: "add-student", payload: newStudent });
      setInput(""), setContactInput("");
    }
  };

  const handleInput = useCallback((event) => {
    const { value, name } = event.target;
    if (name === "name") {
      setInput(value);
    } else if (name === "contact") {
      setContactInput(value);
    }
  }, []);

  const handleSearch = useCallback((event) => {
    dispatch({ type: "search", payload: event.target.value });
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
              type="text"
              name="name"
              placeholder="Enter your name . . ."
              ref={nameref}
              value={input}
              onChange={handleInput}
              className="inputbox"
              error={inputError}
            />
            <span style={{ color: "red" }}>{inputError}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              type="tel"
              name="contact"
              placeholder="Enter your contact number . . ."
              value={contactInput}
              onChange={handleInput}
              className="inputbox"
              error={contacterror}
            />
            <span style={{ color: "red" }}>{contacterror}</span>
          </div>
        </div>
        <div style={{ alignContent: "center" }}>
          <button
            className="addbtn"
            title="Add contact"
            onClick={handleAddClick}
          >
            <IoIosPersonAdd />
          </button>
        </div>
      </div>

      <Input
        type="text"
        name="search"
        className="searchInput"
        value={state?.search}
        placeholder="Search here . . ."
        onChange={handleSearch}
      />
    </div>
  );
}

export default ListInput;
