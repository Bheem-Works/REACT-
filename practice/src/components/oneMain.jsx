import React, { useEffect, useState } from 'react';

const OneMain = () => {

    const [count,setCount] = useState(0);


    
    // // Case 1: 
    //     useEffect(() => {
    //     alert("It will run for forever");
    //     });

    // // Case 2: 
    //     useEffect(()=>{
    //         alert("Welcome to the first time in my website!");
    //     },[]);

    // Case 3: 
        useEffect(()=>{
            document.title = `count${count}`;
            alert(`Your count is right now ${count}`);
        },[count]);


    return (
        <div>
            <button
             onClick={()=>setCount(count + 1)}>count : {count}</button>
        </div>
    );
}

export default OneMain;
