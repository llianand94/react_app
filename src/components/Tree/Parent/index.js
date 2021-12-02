import React from 'react';
import { ChildWithThemeContext } from '../Child';
import { WithThemeContext} from '../../HOCs';

export const Parent = (props) => {
 const {language} = props;
  return (
    <div>
      <h2>{language==='ENG'?'Parent':'Родитель'}</h2>
      <ChildWithThemeContext/>
      </div>    
  );
}
export const ParentWithThemeContext = WithThemeContext(Parent);

