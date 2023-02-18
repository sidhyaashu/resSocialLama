import { NavLink } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
          <div className='register'>
      <div className="card">

      <div className="left">
          <h1>Lama social</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus itaque ipsum dolorem non!</p>
          <span>Do you have any account?</span>
          <NavLink to="/">
          <button>login</button>
          </NavLink>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password'/>
            <button>Register</button>
            
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register
