import React , {useState, useEffect} from 'react';
import {format, addMilliseconds} from 'date-fns';

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
  const [isRunning, setIsRunning] = useState(false);

  const btnHanler = ()=>{
    setIsRunning(!isRunning);
  }
  const resetHanler = ()=>{
    setTime(new Date(0,0,0,0,0,0,0));
    setIsRunning(false);
  }
  useEffect(()=>{
    if(isRunning){
    const idInterval = setInterval(()=>setTime(time=>addMilliseconds(time,1000)))
      return ()=>{
        clearInterval(idInterval);
      }      
    }
  },[isRunning])

  return (
    <div>
      <h2>Stop Watch</h2>
      <p>Timer: {format(time, 'HH:mm:ss')}</p>
      <button onClick={btnHanler}>{isRunning?'Stop':'Start'}</button>
      <button onClick={resetHanler}>Reset</button>
    </div>
  );
}

export default FuncStopWatch;
