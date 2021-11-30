import './App.css';
import React from 'react';

import SignInForm from './components/SignInForm';
import SIGN_UP_SCHEME from './utils/schemaValidator';


const App = () => {
  const userData ={
    fname:'Rewtgafg',
    sname:'Rewt',
    email:'ewtgafg@gmail.com',
    password:'wGer13f$tgafg',
    age:20,
  }
  console.log(SIGN_UP_SCHEME.validateSync(userData));
  return (
    <div>
      <SignInForm/>
    </div>
  );
}

export default App;


