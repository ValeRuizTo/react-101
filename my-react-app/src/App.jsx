import { useState } from "react";
import { Button } from "./Button/button";

function App() {
  const [count, setCount] =useState(0); //Recarga la parte de la pagina que necesita no toda

  const add= () =>{
    setCount(count+1);
  }
  const substract= () =>{
    setCount(count-1);
  }

  return <div className="flex items-center border p-5 justify-between">
    <Button callback={substract} label="-"/>
    <p>{count}</p>
    <Button callback={add} label="+"/>
  </div>;
}

export default App;
