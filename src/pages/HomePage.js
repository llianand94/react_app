import React, {useContext} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '../constants';
const {THEMES} = CONSTANTS;

const styleMap = {
  [THEMES.LIGHT]:{
    backgroundColor:'white', color: 'black',height:'120px',
  },
  [THEMES.DARK]:{backgroundColor:'black', color: 'white',height:'120px',}
}


const Homepage = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  
  const themeHanler = ()=>{
    setTheme(theme===THEMES.LIGHT?THEMES.DARK:THEMES.LIGHT)
  }  
  return (
    <div style={styleMap[theme]}>
      <button onClick={themeHanler}>Change theme</button>
      <p>Home page</p>
      <UserProfile/>
    </div>
  );
}


export default Homepage;
