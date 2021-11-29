import React from 'react';
import styles from './UserCard.module.scss';
import { UserContext } from '../../../context';


const UserCard = () => {
  
  const renderProps = (user) => {
      return (
      <div className={styles.container}>
      <h2>UserCard</h2>
      
      <img src={user.imgSrc} className={styles.img} alt={(user.fname, user.sname)}/>
      <p>{user.fname} {user.sname}</p>
      </div>
    );
  }

return <UserContext.Consumer>{renderProps}</UserContext.Consumer>;

}

export default UserCard;