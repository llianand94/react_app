
import * as Yup from 'yup';

const SIGN_UP_SCHEME = Yup.object({
  fname:Yup.string().matches(/^[A-Z][a-z]{1,16}$/,'Must have first Uppercase letter and lost latin').required(),
  sname:Yup.string().matches(/^[A-Z][a-z]{1,16}$/).required(),
  email:Yup.string().email('Enter valid email').required(),
  password:Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/).required(),
  age:Yup.number().min(14).max(128),
}) 

export default SIGN_UP_SCHEME;