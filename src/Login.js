import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import userEvent from '@testing-library/user-event';


function Login() {

        const navigate = useNavigate ();

        const [loginType, setLoginType] = React.useState('sign_in');      
        
        const handleChange = (event, newLoginType) => {
            if (newLoginType !== null) {
                setLoginType(newLoginType);
              }
        };

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const signIn = e => {
            e.preventDefault();

            auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
        }

        const register = e => {
            e.preventDefault();

            auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error  => alert(error.message));
        }

        if (loginType === 'sign_in') {
            return (
              <div className='login'>
                  <div className='login__logo_wrapper'>
                      <Link to='/'>
                          <img className='login__logo' src='https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png'></img>
                      </Link>
                  </div>
                  <div className='login__window'>
                      <div className='login__register'>
                          <ToggleButtonGroup
                              color="primary"
                              value={loginType}
                              exclusive
                              onChange={handleChange}
                              aria-label="Platform"
                              >
                              <ToggleButton value="register">Register</ToggleButton>
                              <ToggleButton value="sign_in">Sign in</ToggleButton>
                          </ToggleButtonGroup>
                      </div>
                      <div className='login__input_wrapper'>
                        <input type='text' className='email' placeholder='Email adress' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type='password' className='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className='login__register_button' type='submit' onClick={signIn}>Sign in</button>    
                  </div>
              </div>
          
            )
        }
        if (loginType === 'register') {
            return (
              <div className='login'>
                  <div className='login__logo_wrapper'>
                      <Link to='/'>
                          <img className='login__logo' src='https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png'></img>
                      </Link>
                  </div>
                  <div className='login__window'>
                      <div className='login__register'>
                          <ToggleButtonGroup
                              color="primary"
                              value={loginType}
                              exclusive
                              onChange={handleChange}
                              aria-label="Platform"
                              >
                              <ToggleButton value="register">Register</ToggleButton>
                              <ToggleButton value="sign_in">Sign in</ToggleButton>
                          </ToggleButtonGroup>
                      </div>
                      <div className='login__input_wrapper'>
                        <input type='text' className='email' placeholder='Email adress' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type='password' className='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className='login__register_button' type='submit' onClick={register}>Create account</button>    
                  </div>
              </div>
          
            )
        }
}

export default Login