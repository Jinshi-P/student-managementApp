import React, { useCallback, useState } from "react";
import Input from "../components/input";
import { IoIosPersonAdd } from "react-icons/io";
const ListInput = React.forwardRef(function ListInput(
  { handleAddButton, contactRef,searchInput,setSearchInput},
  ref
) {
  console.log("listinput is running")
  const [input, setInput] = useState("");

  const handleInput = useCallback((event)=>{
   
    setInput(event.target.value);
  
  },[]);

  const handleSearch =useCallback((event)=>{
    
setSearchInput(event.target.value)
   }
  ,[])

  return (
    <div className="listinput">
      {/* <input
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
      /> */}
    <div className="input">
 <Input value={input}
      name="name"
      className="inputbox"
       type="text"
       placeholder="Enter your name . . ." 
       onChange={handleInput}
      ref={ref}/>

      <Input type="tel"
      name="contact"
      className="inputbox"
        ref={contactRef}
        placeholder="Enter your contact number . . ."/>

      <button
      className="addbtn"
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
        }}>
        <IoIosPersonAdd />
      </button>
    </div>
     

    <Input type="text"
    name="search"
    className="searchInput"
    value={searchInput}
     placeholder="Search here . . ."
     onChange={handleSearch}
     />
    </div>
  );
});

export default ListInput;
