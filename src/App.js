
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext, UserContext } from './context';
import Homepage from './pages/HomePage';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

const App = () => {
  const [isVisible, setIsvisible] = useState(true);

  const [user, setUser] = useState({
    id:1,
    name:'Ursoc',
  });
  const arrThemeState = useState(THEMES.LIGHT);
  // const themeHanler = () =>{
  //   theme==='LIGHT'?setTheme('DARK'):setTheme('LIGHT');
  
  
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
   
   

  return (
    <div> 
      
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={arrThemeState}>
         <BrowserRouter>         
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




