
import React, {useState,useReducer} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext, UserContext, MenuStateContext } from './context';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CONSTANTS from './constants';
import HomePage from './pages/HomePage';
import SingUpForm from './components/forms/SingUpForm';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import reducer from './appReducer';
const {THEMES, ACTIONS} = CONSTANTS;

const App = () => {
  const [isVisible, setIsvisible] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen:false
  })
  const [user, setUser] = useState({
    id:1,
    name:'Ursoc',
  });
  const arrThemeState = useState(THEMES.LIGHT);
  const handlerVis = () =>{
    setIsvisible(!isVisible);
  }
  const openMenu = ()=>dispatch({type: ACTIONS.MENU_OPEN}) 
  const closeMenu = ()=>dispatch({type: ACTIONS.MENU_CLOSE})
  
  return (
    <div>
      <MenuStateContext.Provider value={{state, closeMenu}}>
      <ThemeContext.Provider value={arrThemeState}>
       <UserContext.Provider value={user}>
         <BrowserRouter>
         <KeyboardArrowRightIcon onClick={openMenu} />
         <NavMenu/>        
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<SingUpForm/>}/>
            <Route path='/chat' element={<Chat/>}/>
          </Routes>
          </BrowserRouter>
        </UserContext.Provider>  
        </ThemeContext.Provider>
        </MenuStateContext.Provider>  
    </div>
  );
}


export default App;




