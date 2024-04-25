import { useEffect, useState } from "react";
import { Button } from "./Button/button";

function App() {
  const [count, setCount] =useState(0); 
  const [newCount, setNewCount] =useState(0); 

  //UseState sirve para tener un estado y una funcion que lo modifique solamente
  //UseEffect sirve para cuando yo quiero que se modifique cuando pasa algo
  const add= () =>{
    setCount(count+1);
  }
  const substract= () =>{
    setCount(count-1);
  }

  const AddnewCount= () =>{
    setNewCount(newCount+1);
  }

//Un cambio en el estado hacer re render de la pagina COMPLETA, si se usa UseSTATE
  console.log("Im rendering") 

  //USe Effect, Recarga la parte de la pagina que necesita no toda
  useEffect(()=> {
    console.log("Im mounted") //si no pongo dependencias en el arr3eglo solo corre la primera vez
  //Aca se ponen paginas de confirmacion para que el usuario se salga o no
  return ()=>
  {
//Para "desmontar" se hace un callback en el regreso
    console.log("Im unmounted")
  }
  },[])//si cambia algo de lo que esta en el arreglo se ejecuta y recarga


  useEffect(()=>{
    console.log(`reacting to state change, New Value: ${count}`)
  },[count])

  
  useEffect(()=>{
    console.log(`reacting to state change, New count Value: ${newCount}`)
  },[newCount])

  return <div className="flex items-center border p-5 justify-between">
    <Button callback={substract} label="-"/>
    <p>{count}</p>
    <Button callback={add} label="+" />
    <Button callback={AddnewCount} label="NewCount"/>
    <p>{newCount}</p>
  </div>;
}

export default App;
