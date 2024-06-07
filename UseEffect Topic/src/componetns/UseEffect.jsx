import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // 1. its perform side effects on components
    //2 . When The Browser Reload its automatic Run
   //3  if the dependency array blank than it run once 
   //4  if the dependency array value change useEffect run again 
   //  ek component change ya update hone pr effect perform karana

   //  2018 mai react ko change kr diyA FUNCTINAQL COMP

   // FUNCTION OR STATE cHANGE THEN ALL THE FUNCTION N COMP ARE RECREATED OR RE - RENDER
  const [counter, setcounter] = useState(0)
   useEffect(() => {
     console.log("UseEffect is runnig")
       
     document.title=counter;
  
     // dependency array
     // multiplke useEffect Call ho skte or ujseState Bhi
   }, [counter])
   
      return (
        <>
    <div>{counter}</div>
    <button onClick={ () => setcounter(counter+1)   }> Increase</button>
    <button  onClick={ () => setcounter(counter-1)   }>Decease</button>
    </>  
)
}

export default UseEffect