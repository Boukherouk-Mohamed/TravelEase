import React , {useState} from 'react'
import '../css/index.css'
import axios from 'axios'

function Login({ onLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          username,
          password,
        });
  
        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem('token', token); // Save the token to localStorage
          onLogin(token);
          window.location.href = '/';
        } else {
          console.log('Login failed');
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    }
  return (
    <div className='containerLogin'>
      <img src="images/logo-removebg.png" alt="" className='logoPng' />
        <br />
        <h1>Login to your account</h1>
        <div className='btnGoogleFb'>
            <button className='SignInWithFb'>
                <img src="images/fb.png" alt="" /> Sign in with Facebook
            </button>
            <button className='SignInWithFb'>
                <img src="images/google.png" alt="" /> Sign in with Google
            </button>
        </div>

        <h3>-OR-</h3>

        <div className='formLogin'>

            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <a href="/"><button onClick={handleLogin} id='submitLogin'>Login</button></a> 
        </div>
        <p>Still don't have an account? <a href="/Register">Create account</a></p>

    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Login
