import { memo } from "react";
const Input = memo((props) => {
  return (
    <>
      <div >

        <input
          type={props?.type}
          name={props?.name}
          placeholder={props?.placeholder}
          ref={props?.ref}
          value={props?.value}
          onChange={props?.onChange}
          className={props?.className}
        />
      </div>
      <div className="input-error" >
        {props?.error}</div>
    </>
  );
});

export default Input;
