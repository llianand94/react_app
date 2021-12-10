import React, {useContext} from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import styles from './NavMenu.module.scss';
import { MenuStateContext } from '../../context';

const NavMenu = () => {
  const {state:{isMenuOpen}, closeMenu} = useContext(MenuStateContext);
  const containerStyle = cx(styles.container,{
    [styles.open]:isMenuOpen
  });
  return (    
    <nav className={containerStyle}>
      <CancelPresentationIcon className={styles.closeBtn} onClick={closeMenu}/>
      <ul className={styles.list}>
        <li >
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/chat'>Chat page</NavLink>
        </li>
        <li>
          <NavLink to='/singup'>SingUp</NavLink>
        </li>
      </ul>
      
    </nav>
  );
}

export default NavMenu;
