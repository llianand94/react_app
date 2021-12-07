
import React, {useContext} from 'react';
import { UserContext, ThemeContext } from '../../context';
import styles from './UserProfile.module.scss';


const UserProfile = () => {
  const value = useContext(UserContext);
  const {id,name} = value;
  const theme = useContext(ThemeContext);
  return (
    <div className={theme==='LIGHT'?styles.dark:styles.ligth}>
      <h2>{name}</h2>
    </div>
  );
}

export default UserProfile;
