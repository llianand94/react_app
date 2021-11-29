import React from 'react';
import Child from '../Child';
import { ThemeContext } from '../../../context';

const Parent = (props) => {

  return (
    <ThemeContext.Consumer>{([theme, setTheme,language])=>{
    return <div>
      <h2>{language==='ENG'?'Parent':'Родитель'}</h2>
      <Child/>
      </div>
    }}</ThemeContext.Consumer>
    
  );
}

export default Parent;
