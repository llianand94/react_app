import React, { useReducer } from 'react';
import reducer from './reducer';


const SingUpForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    fname:'',
    sname:'',
    email:'',
    password:'',
    phone:'',
    age:0
  })
  const handleInput = ({target:{name, value}})=>{
    dispatch({name, value});
  }
  return (
    <div>
      <h2>Sign up page</h2>
      <form>
        <input type='text' name='fname' value={state.fname} onChange={handleInput}/>
        <input type='text' name='sname' value={state.sname} onChange={handleInput}/>
      </form>
    </div>
  );
}

export default SingUpForm;
