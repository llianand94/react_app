import React, {useContext, useState, useCallback, useMemo} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '/home/fm2021-2/Projects/react_app/src/constants';
const {THEMES} = CONSTANTS;

const styleMap = {
  [THEMES.LIGHT]:{
    backgroundColor:'white', color: 'black',height:'120px',
  },
  [THEMES.DARK]:{backgroundColor:'black', color: 'white',height:'120px',}
}

function calcValue(n){
  let res= 0;
  for(let i=0; i<100000; i++){
    res+=i;
  }
  return res+n**5;
}
const Homepage = () => {
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useContext(ThemeContext);
  
  const themeHanler = useCallback(()=>{
    setTheme(theme===THEMES.LIGHT?THEMES.DARK:THEMES.LIGHT)
  },[theme]);
  const hanlerInput = useCallback(({target:{value}}) =>{
    setValue(Number(value));
  },[]);  
  const logHanler = useCallback(()=>{
    console.log(value);
  },[value])
  const keepCalcValue = useMemo(()=>calcValue(value),[value])

  return (
    <div style={styleMap[theme]}>
      <h2>{keepCalcValue}</h2>
      <input type='number' value={value} onChange={hanlerInput}/>
      <button onClick={themeHanler}>Change theme</button>
      <button onClick={logHanler}>Log value</button>
      <p>Home page</p>
      <UserProfile/>
    </div>
  );
}


export default Homepage;
