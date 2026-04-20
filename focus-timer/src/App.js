import React,{useState, useEffect} from "react";
import "./App.css";
function App(){
  const[seconds,setSeconds]=useState(1500);
  const[isRunning, setIsRunning]=useState(false);
  useEffect(()=>{
    let timer;
    if (isRunning && seconds>0){
      timer=setInterval(()=>{
        setSeconds((prev)=>prev-1)
      },1000);
    }
    return ()=> clearInterval(timer);
  },[isRunning, seconds]);
  const formatTime=()=>{
    const min=Math.floor(seconds/60);
    const sec= seconds%60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };
    return(
      <div className="container">
        <h1> Focus Timer</h1>
        <h2>{formatTime()}</h2>
        <button onClick={()=> setIsRunning(true)}> Start</button>
        <button onClick={()=> setIsRunning(false)}>Pause</button>
        <button onClick={()=>{
          setSeconds(1500);
          setIsRunning(false);
        }}> Reset</button>

      </div>
    );
  }
  export default App;
