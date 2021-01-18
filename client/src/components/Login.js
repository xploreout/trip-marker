import React from 'react';
import { useForm } from 'react-hook-form';

const Login = (props) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  }

  return(
    <section className='container'>
      <center>

      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section"></div>
      <form className='card' onSubmit={handleSubmit(onSubmit)}>
        <div className=' card-content auth-div'>
          <input type="text" name="email" ref={register} placeholder="Email"></input>
        </div>
        <div className='card-content auth-div'>
          <input name="password" ref={register} placeholder="Password"></input>
        </div>
        <button  type="submit" className='btn btn-small'>Submit</button>
      </form>
      </center>
    </section>
   )

 }

export default Login