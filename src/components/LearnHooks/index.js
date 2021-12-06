import React, {useState} from 'react';

const LearnHooks = () => {
  const [coords, setCoords] = useState({
    x:0,
    y:0,
  });
  const [count, setCount] = useState(0);
  const handlerClick = ()=>{
    setCount(count+1);
  }
  const handlerMove = (e) =>{
    setCoords({
      x:e.clientX,
      y:e.clientY,
    })
  }
  const handlerReset = () =>{
    setCount(0);
  }
  return (<>
    <div style={{height:'90vh'}} onMouseMove={handlerMove} onClick={handlerClick}>
      <p>x:{coords.x}</p>
      <p>x:{coords.y}</p>
      <p>Count of clicks:{count}</p>
      
    </div>
    <button onClick={handlerReset}>RESET</button>
    </>
  );
}

export default LearnHooks;
