import {useState} from "react";
function counter(){
    const [count,setCount]=useState(0)
    const increment = () =>{
        setCount((count)=>count+1)
    }
    const decrement = () =>{
        setCount((count)=>count-1)
    }
    return{count,increment,decrement}
}
export default counter