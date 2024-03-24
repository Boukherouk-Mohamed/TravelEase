import React from 'react'
import '../css/index.css'
function Register() {
  return (
    <div className='containerLogin'>
      <img src="images/logo-removebg.png" alt="" className='logoPng' />
        <br />
        <h1>Create your account</h1>
        <div className='btnGoogleFb'>
            <button className='SignInWithFb'>
                <img src="images/fb.png" alt="" /> Sign up with Facebook
            </button>
            <button className='SignInWithFb'>
                <img src="images/google.png" alt="" /> Sign up with Google
            </button>
        </div>

        <h3>-OR-</h3>

        <div className='formLogin'>
            
            <input type="text" name="" id="" placeholder='Fullname'  />
            <input type="text" name="" id="" placeholder='Email '  />
            <input type="password" name="" id="" placeholder='Password'  />
            <br />
            <a href="/"><input type="submit" value='Register' id='submitLogin' /></a> 
             
        </div>
        <p>Already have an account? <a href="/Login">Sign in</a></p>

    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Register
