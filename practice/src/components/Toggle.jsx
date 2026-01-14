import { useState } from "react";

function Toggle(){

    const [display,setDisplay] = useState(false);
    
    return(
    <>
    <p>Toggle man!</p>
    {
        display? <h2>hello</h2> : <h2>Bye</h2>
    }
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>)
}

export default Toggle;