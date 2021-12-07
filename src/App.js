
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FuncStopWatch from './components/FuncStopWatch'
import { ThemeContext, UserContext } from './context';
import Homepage from './pages/HomePage';

const App = () => {
  const [isVisible, setIsvisible] = useState(true);

  const [user, setUser] = useState({
    id:1,
    name:'Ursoc',
  });
  const [theme, setTheme] = useState('LIGHT');

  const themeHanler = () =>{
    theme==='LIGHT'?setTheme('DARK'):setTheme('LIGHT');
  }
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
   
   

  return (
    <div>
      
      
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
         <BrowserRouter>
         <button onClick={themeHanler}>Change theme</button>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
          </Routes>
          </BrowserRouter>
          </ThemeContext.Provider>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;




