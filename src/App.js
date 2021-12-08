
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext, UserContext } from './context';

import CONSTANTS from './constants';
import HomePage from './pages/HomePage';
const {THEMES} = CONSTANTS;

const App = () => {
  const [isVisible, setIsvisible] = useState(true);

  const [user, setUser] = useState({
    id:1,
    name:'Ursoc',
  });
  const arrThemeState = useState(THEMES.LIGHT);
 
  
  
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
   
   

  return (
    <div> 
      
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={arrThemeState}>
         <BrowserRouter>         
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
          </BrowserRouter>
          </ThemeContext.Provider>
      </UserContext.Provider>
     
    </div>
  );
}


export default App;




