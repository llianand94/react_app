import React from 'react';
import styles from './UserCard.module.scss';
import { UserContext,ThemeContext } from '../../../context';


const UserCard = () => {
  
  

return <ThemeContext>{
  ([theme,setTheme,language])=>{
  const renderProps = (user) => {
    return (
    <div className={styles.container}>
    <h2>{language==='ENG'?'UserCard':'Карточка Пользователя'}</h2>
    
    <img src={user.imgSrc} className={styles.img} alt={(user.fname, user.sname)}/>
    <p className={styles.marginY}>{user.fname} {user.sname}</p>
    </div>
  );
}
  return <UserContext.Consumer>{
    renderProps}
    </UserContext.Consumer>;
  }}
</ThemeContext>

}

export default UserCard;