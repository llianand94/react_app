
import React, {useState} from 'react';
import FuncStopWatch from './components/FuncStopWatch'
const App = () => {
  const [isVisible, setIsvisible] = useState(true);
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
  return (
    <div>
      <button onClick={handlerVis}> Switch isVisible</button>
      {isVisible && <FuncStopWatch/>}
    </div>
  );
}

export default App;




