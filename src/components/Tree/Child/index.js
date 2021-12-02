import React from 'react';
import UserCard from '../UserCard';
import { WithThemeContext } from '../../HOCs';

export  const Child = (props) => {
  const {language} = props;
  return <div>
        <h2>{language==='ENG'?'Child':'Ребенок'}</h2>
        <UserCard language={language}/>
      </div>   
}

export const ChildWithThemeContext = WithThemeContext(Child);

