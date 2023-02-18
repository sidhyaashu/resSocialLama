import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/authContex';
import './LeftBar.scss'

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
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

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Group</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Event</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Gellary</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
        <span>Others</span>
          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Fundrais</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-outraged-furious-young-european-blonde-woman-expressing-indignation-reaching-out-hands-making-no-stop-gesture-saying-stay-away-from-me-while-having-fight-with-her-boyfriend_343059-4656.jpg?w=2000" alt="" />
            <span>Course</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftBar
