import React , {useState,useEffect} from 'react';
import {getUsersJSON} from './../../api';

const FuncNameList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    getUsersJSON()
    .then((data)=>setUsers(data))
    .catch((error)=>setError(error.message))
    .finally(setIsLoad(false))
    
  },[]);
  if(error){
    return <p>{error}</p>
  }
  if(isLoad){
    return <p>Loading...</p>
  }
  return (<>
    
    <ol>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
    </>
  );
}

export default FuncNameList;
