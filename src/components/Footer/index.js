import React, { Component } from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import {ThemeContext} from '../../context'
import CONSTANTS from '../../constants';
const {DARK,LIGHT} = CONSTANTS.THEMES;

class Footer extends Component {
  
  render() {    
    return (
      <ThemeContext.Consumer>{
        ([theme, setTheme, language, setLanguage])=>{       
          const themeClass =classNames(styles.container,{
            [styles.light]:theme===LIGHT,
            [styles.dark]:theme===DARK, 
          })
          
          return <div className={themeClass}>
            <span> {language==='RU'? 'Select your native language:':'Выберите родной язык:'} </span>       
            
            <label><input onChange={({target})=>setLanguage(target.value)} type="radio" name='lang' value='ENG'/>ENG</label>
            <label><input onChange={({target})=>setLanguage(target.value)} type="radio" name='lang' value='RU'/>RU</label>
          </div>}         
        }
      </ThemeContext.Consumer>
    );
  }
}

export default Footer;
