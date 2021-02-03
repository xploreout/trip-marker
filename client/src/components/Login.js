import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userLogin } from './API'
import { userRegister } from './API'

const Login = (props) => {
  const { handleSubmit, register, errors} = useForm();

  const onSubmit = async (formData) => {
    const res = await userLogin(formData)
    console.log('res...,', res.json())
    // alert(JSON.stringify(formData))
  }

  return(
    <section className='login__section' style={{display:'flex', alignContent:'center', justifyContent: 'center', margin: '2rem 10rem', padding: '1rem', border:'none'}}>
      <center>

      <h4 style={{fontSize: '1.2rem'}}>Please, login into your account</h4>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='login__input-email' style={{width:'100%', margin: '1rem auto'}}>
          <input type="text" name="email" style={{border:'none', backgroundColor:'#f1f1f1', width: '100%', fontSize: '1.1rem'}} ref={register({required: 'Email required'})} placeholder="Email"></input>
          {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
        </div>
        <div className='login__input-password' style={{width:'100%',border:'0'}}>
          <input name="password" style={{width:'100%', fontSize: '1.1rem',marginBottom: '1rem',border:'none', backgroundColor:'#f1f1f1'}}ref={register({minLength: {value:6, message: 'Password too short'}})} placeholder="Password"></input>
        </div>
        <button  type="submit" className='login__submit'>Submit</button>
      </form>
        <div className='login__register'>
          <Link to='/Register'>
            Register as new user
          </Link>
        </div>
      </center>
    </section>
   )

 }

export default Login