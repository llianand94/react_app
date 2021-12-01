import { ErrorMessage, Field } from 'formik';
import React from 'react';
import styles from './InputWrapper.module.scss'
import cx from 'classnames';

const InputWrapper = (props) =>{
  const {name,...rest} =props;
  return <label className={styles.label}>
    <Field name={name}>{
      ({field, form, meta})=>{
        const classNames = cx(styles.input,{
          [styles.valid]:meta.touched&& !meta.error,
          [styles.invalid]:meta.touched&& meta.error,
        } )
        return <input {...field} {...rest} className={classNames}/>
      }}
    </Field>
    <ErrorMessage name={name} component ='div' className={styles.error}/>
    </label>
}

export default InputWrapper;
