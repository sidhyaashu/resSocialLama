import './NavBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NavLink } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from 'react';
import { AuthContext } from '../../contex/authContex';

const NavBar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="left">
        <NavLink to="/" style={{textDecoration: "none"}}>
        <span>Lamasocial</span>
        </NavLink>

        <NavLink to="/" style={{"text-decoration": "none"}}>
        <HomeOutlinedIcon style={{"cursor": "pointer",color:"initial"}} />
        </NavLink>

        <GridViewOutlinedIcon style={{"cursor": "pointer"}} />
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search Your Babe' />
        </div>
      </div>
      <div className="right">
        <div className="navrightoptions">
      <Person2OutlinedIcon style={{"cursor": "pointer"}} />
      <EmailOutlinedIcon style={{"cursor": "pointer"}} />
      <NotificationsNoneOutlinedIcon style={{"cursor": "pointer"}} />
        </div>
      <div className="user">
        <NavLink style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration:"none" ,
          color:"initial"
        }} to={`/profile/${currentUser.id}`}>
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        </NavLink>

      </div>
      </div>
    </div>
  )
}

export default NavBar
