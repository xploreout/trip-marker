import React, { useRef } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userRegister } from './API';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log(
        'password not matched',
        passwordRef.current.value,
        emailRef.current.value,
        confirmPasswordRef.current.value
      );
      return console.log('Password not match');
    } else {
      const response = await userRegister({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: usernameRef.current.value,
        role: 'user'
      });
      return response;
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
              <h3 className='text-center mt-1 mb-3'>Sign up here</h3>
              <Form>
                <Form.Group id='username'>
                  <Form.Control
                    type='username'
                    ref={usernameRef}
                    required
                    placeholder='Username'
                    name='username'
                  />
                </Form.Group>
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
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type='password'
                    ref={passwordRef}
                    placeholder='Password'
                    required
                    name='password'
                  />
                </Form.Group>
                <Form.Group id='confirmPassword'>
                  {/* <Form.Label>Confirm Password</Form.Label> */}
                  <Form.Control
                    type='password'
                    ref={confirmPasswordRef}
                    required
                    placeholder='Confirm Password'
                  />
                </Form.Group>
                <Button
                  type='submit'
                  onClick={handleSubmit}
                  className='btn-lg btn-dark light btn-block'
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <p className='small w-70 text-center'>
            Already have an account?
            <Link to='/Login'> Login</Link> here
          </p>
        </div>
      </Container>
    </>
  );
};

export default Register;
