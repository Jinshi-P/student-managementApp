import { useCallback, useState,useRef ,useEffect} from "react";
import Input from "../components/input";
import { IoIosPersonAdd } from "react-icons/io";
import useAppContext from "../hooks/useAppContext";

function ListInput() {
  const { state, dispatch } = useAppContext();
  const [input, setInput] = useState("");

  const [inputError, setInputError] = useState("");
  const [contacterror, setcontacterror] = useState("");

  const contactRef = useRef();
  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, []);

  const handleAddClick = () => {
    if (input == "") {
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
      const newStudent = {
        id: crypto.randomUUID(),
        name: input,
        contact: contactRef.current.value,
      };

      dispatch({ type: "add-student", payload: newStudent });
      contactRef.current.value;
      setInput(""), (contactRef.current.value = "");
    }
  };

  const handleInput = useCallback((event) => {
    setInput(event.target.value);
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
