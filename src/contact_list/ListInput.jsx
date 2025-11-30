import React, { useState } from "react";

const ListInput = React.forwardRef(function ListInput(
  { handleAddButton, contactRef },
  ref
) {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input
        value={input}
        type="text"
        ref={ref}
        placeholder="Enter your name . . ."
        onChange={handleInput}
      />
      <input
        type="tel"
        ref={contactRef}
        placeholder="Enter your contact number . . ."
      />
      <button
        onClick={() => {
          handleAddButton(
            {
              id: crypto.randomUUID(),
              name: input,
              contact: contactRef.current.value,
            },
            setInput(""),
            (contactRef.current.value = "")
          );
        }}
      >
        Add
      </button>
    </div>
  );
});

export default ListInput;
