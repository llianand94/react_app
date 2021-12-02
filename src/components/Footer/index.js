import React, { Component } from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import { WithThemeContext } from '../HOCs';
const {DARK,LIGHT} = CONSTANTS.THEMES;

export class Footer extends Component {
  
  render() { 
    const {theme, language, setLanguage}= this.props;   
    const themeClass =classNames(styles.container,{
      [styles.light]:theme===LIGHT,
      [styles.dark]:theme===DARK, 
    })
    return (
      <div className={themeClass}>
        <span> {language==='RU'? 'Select your native language:':'Выберите родной язык:'} </span>             
        <label><input onChange={({target})=>setLanguage(target.value)} type="radio" name='lang' value='ENG'/>ENG</label>
        <label><input onChange={({target})=>setLanguage(target.value)} type="radio" name='lang' value='RU'/>RU</label>
      </div> )
  }
}
export const FooterWithThemeContext = WithThemeContext(Footer); 

