import {memo} from "react"
const Input=memo((props)=>{
return(
    < >
        <input type={props?.type}  placeholder={props.placeholder}
        ref={props.ref} value={props.value} onChange={props.onChange}
        className={props?.className} />
    </>
)

})

export default Input