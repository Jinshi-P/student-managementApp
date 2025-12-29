import React from "react"
const Input=React.memo((props)=>{
return(
    <div >
        <input type={props?.type}  placeholder={props.placeholder}
        ref={props.ref} value={props.value} onChange={props.onChange}
        className={props?.className} />
    </div>
)

})

export default Input