import { useState } from "react";
 
import "./App.css";

function App() {
  const [counter,setCounter]=useState(5)
  // let counter = 5;
  const addvalue = () => {
// counter =counter+1 
if(counter<20){
  


setCounter(counter+1)}
console.log("clicked", counter);

    // console.log("value added", Math.random() * 10);
  };

  const removevalue=()=>{
    // counter=counter-1
    if(counter>0) setCounter(counter-1);
    console.log("clicked",counter)
  }

  return (
    <>
      <h1> chai aor react </h1>
      <h2>counter values : {counter} </h2>

      <button onClick={addvalue}> add value{counter}</button>
      <br />
      <button onClick={removevalue} >remove value {counter}</button>
    </>
  );
}

export default App;
