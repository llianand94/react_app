import React from 'react';
import cx from 'classnames';
import { ParentWithThemeContext } from './Parent';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithThemeContext } from '../HOCs';
const {THEMES} = CONSTANTS;

const Tree = (props) => {
  const {theme, language} = props;
  const classNames = cx(styles.container,{
        [styles.light] : theme===THEMES.LIGHT,
        [styles.dark] : theme===THEMES.DARK,
      });
  return (
          <div className={classNames}>
            <h2 className={styles.marginY}>{language==='ENG'?'Tree':'Дерево'}</h2>
            <ParentWithThemeContext/>
          </div>
        ); 
}

const TreeWithThemeContext = WithThemeContext(Tree);
export default TreeWithThemeContext;
