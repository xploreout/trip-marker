import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userLogin } from './API'
import { userRegister } from './API'

const Login = (props) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (formData) => {
    const res = await userLogin(formData)
    console.log('res...,', res)
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
        <div className='card-content auth-div'>
          <Link to='/Register'>
            Register as new user
          </Link>
        </div>
      </center>
    </section>
   )

 }

export default Login