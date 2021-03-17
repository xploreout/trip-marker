import React, { useRef, useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userLogin } from './API';
import { useContext } from './context/UserContext'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await userLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      return response;
    } catch (error) {
      console.log('Server error: ', error);
    }
  }

  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center '
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '500px' }}>
          <Card className='shadow p-3 mb-3 bg-white rounded'>
            <Card.Body>
              <h3 className='text-center mb-3 mt-1'>Login</h3>
              <Form>
                <Form.Group id='email'>
                  <Form.Control
                    type='email'
                    ref={emailRef}
                    required
                    placeholder='Email'
                    name='email'
                  />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Control
                    type='password'
                    ref={passwordRef}
                    placeholder='Password'
                    required
                    name='password'
                  />
                </Form.Group>
                <Button
                  type='submit'
                  onClick={handleSubmit}
                  className='btn-lg btn-dark light btn-block'
                >
                  Submit
                </Button>

                <div className='small text-center mt-4'>
                  <span>
                    <Link to='#'>Forget Password</Link>
                  </span>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <p className='small w-70 text-center'>
            Don't have an account?
            <Link to='/Register'> Sign up </Link>
            here
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
