import { getJSON } from './../../api';
import React , {useState,useEffect} from 'react';
import {useData, useClicker} from './../../hooks';

const FuncNameList = () => {
  const {data: users, error, isLoad} = useData(getJSON);
  const count = useClicker(0);
  if(isLoad){
  return <p>Loading...</p>}
  
  if(error){
    return <p>{error}</p>
  }
    
  return (
    <ol>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
      <h2>Count of clicks by window: {count}</h2>
    </ol>
    
  );
}

export default FuncNameList;
