import React from 'react';
import UserCard from '../UserCard';
import { ThemeContext } from '../../../context';

const Child = (props) => {
  
  return <ThemeContext.Consumer>{
    ([a,b,language])=>{
      return (
      <div>
        <h2>{language==='ENG'?'Child':'Ребенок'}</h2>
        <UserCard language={language}/>
      </div>
    )}
    }
    </ThemeContext.Consumer>
  
}

export default Child;
