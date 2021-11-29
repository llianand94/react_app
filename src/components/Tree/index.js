import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import {ThemeContext} from '../../context';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

const Tree = (props) => {
  return(
    <ThemeContext.Consumer>{
      ([theme,setTheme,language])=>{
      const classNames = cx(styles.container,{
        [styles.light] : theme===THEMES.LIGHT,
        [styles.dark] : theme===THEMES.DARK,
      });
        return (
          <div className={classNames}>
            <h2 className={styles.marginY}>{language==='ENG'?'Tree':'Дерево'}</h2>
            <Parent/>
          </div>
        );
      }
    }
    </ThemeContext.Consumer> 
) 
}

export default Tree;
