import { useCallback, useState, useRef, useEffect } from "react";
import Input from "../components/input";
import { IoIosPersonAdd } from "react-icons/io";
import useAppContext from "../hooks/useAppContext";

function ListInput() {
  const { state, dispatch } = useAppContext();
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
  });
  const [formError, setFormError] = useState({});

  const nameref = useRef("");

  useEffect(() => {
    nameref.current.focus();
  }, []);

  const handleInput = useCallback((event) => {
    const { value, name } = event.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({
      ...prev,
      [name]: value ? "" : `${name} required`,
    }));
  }, []);

  const validateFormValues = () => {
    const errors = {};
    Object.keys(formValues)?.forEach((key) => {
      if (!formValues[key]) {
        errors[key] = `${key} is required`;
      }
    });
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const resetState = () => {
    setFormError({});
    setFormValues({ name: "", contact: "" });
  };

  const handleAddClick = () => {
    if (validateFormValues()) {
      dispatch({
        type: "add-student",
        payload: { ...formValues, id: crypto.randomUUID() },
      });
      resetState();
    }
  };

  const handleSearch = useCallback((event) => {
    dispatch({ type: "search", payload: event.target.value });
  }, []);

  return (
    <div className="listinput">
      <div className="input">
        <div className="inputs">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name . . ."
            ref={nameref}
            value={formValues?.name || ""}
            onChange={handleInput}
            className="inputbox"
            error={formError?.name}
          />

          <Input
            type="tel"
            name="contact"
            placeholder="Enter your contact number . . ."
            value={formValues?.contact || ""}
            onChange={handleInput}
            className="inputbox"
            error={formError?.contact}
          />
        </div>
        <div>
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
