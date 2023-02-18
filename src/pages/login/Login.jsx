import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contex/authContex';
import './Login.scss'

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin =()=>{
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus itaque ipsum dolorem non!</p>
          <span>Don't you have any account?</span>
          <NavLink to="/register">
          <button>Register</button>
          </NavLink>
        </div>
        <div className="right">
          <h1>login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
