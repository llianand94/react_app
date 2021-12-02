import React, { Component } from 'react';
import cx from 'classnames';
//import { WbSunny,  DarkMode} from '@mui/icons-material';
import { WbSunny } from '@material-ui/icons';
import { NightsStayRounded } from '@material-ui/icons';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithThemeContext,WithUserContext } from '../HOCs';
const {THEMES} = CONSTANTS;

class Header extends Component {  
  render() {
    console.log(this.props);
  const {theme,setTheme,user} = this.props;
  const isLightTheme = theme===THEMES.LIGHT;
  const classNames = cx(styles.container,{
          [styles.light] : isLightTheme,
          [styles.dark] : theme===THEMES.DARK,
        });
  return (
        <header className={classNames}>
        <p>{user.fname} {user.sname} </p>
        <div className={styles.imgWrapper} onClick={()=>{
          const nextTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
          return setTheme(nextTheme);
          
        }}>              
          {isLightTheme ? <NightsStayRounded style={{ color: `rgb(13, 13, 129)`, fontSize: `2rem`}}/>:<WbSunny style={{fontSize: `2rem`}}/>}
        </div>
      </header>
      )
            
  }
}

export const HeaderWithUserContext = WithUserContext(Header);
export const HeaderWithThemeContext = WithThemeContext(HeaderWithUserContext);


