import React from 'react';
import { Formik,Form} from 'formik';
import {SIGN_IN_SCHEME} from '../../../utils/schemaValidator';
import InputWrapper from '../InputWrapper';


const initialValues={
  email: '',
  password: '',
}

const SignInForm = (props)=> {
  const onSubmit = (values, formikBag)=>{
    console.log(values,  formikBag);
  }
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEME}>
      {
        (formikProps)=>{
          return (
            <Form >
              <InputWrapper name ='email'/>
              <InputWrapper name ='password' type='password' />
              <InputWrapper name ='password' type='password' />
              <input type='submit' value='Sing in'/>
            </Form>
          )
        }
      }        
      </Formik>
    );
}



export default SignInForm;
