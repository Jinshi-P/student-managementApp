import {memo} from "react"
const Input=memo((props)=>{
return(
    < >
        <input type={props?.type} name={props?.name} placeholder={props?.placeholder}
        ref={props?.ref} value={props?.value} onChange={props?.onChange}
        className={props?.className} error={props?.error}/>
    </>
)

})

export default Input