
import React, {useState} from 'react';
import LearnHooks from './components/LearnHooks'
const App = () => {
  const [isVisible, setIsvisible] = useState(true);
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
  return (
    <div>
      <button onClick={handlerVis}> Switch isVisible</button>
      {isVisible && <LearnHooks/>}
    </div>
  );
}

export default App;




