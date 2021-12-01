
import * as Yup from 'yup';

export const NAME_SCHEMA =  Yup.string().matches(/^[A-Z][a-z]{1,16}$/,'Must have first Uppercase letter and lost latin').required();
export const EMAIL_SCHEMA = Yup.string().email('Enter valid email').required();

export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/).required();

export const SIGN_UP_SCHEME = Yup.object({
  fname:NAME_SCHEMA,
  sname:NAME_SCHEMA,
  email:EMAIL_SCHEMA,
  password:PASSWORD_SCHEMA,
  age:Yup.number().min(14).max(128),
}) 

export const SIGN_IN_SCHEME = Yup.object({
 
  email:EMAIL_SCHEMA,
  password:PASSWORD_SCHEMA,
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match'),
  
}) 