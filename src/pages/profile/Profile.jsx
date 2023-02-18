import './Profile.scss'

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <>
    <div className='profile'>
        <div className="images">
        <img className='cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjlCIxWaSMDVruKZJSTF4UHjhCmtCpzqtFh4AZ2905Q&s" alt="" />
        <img className='profilepic' src="https://img.freepik.com/free-photo/half-profile-image-beautiful-young-woman-with-bob-hairdo-posing-gazing-with-eyes-full-reproach-suspicion-human-facial-expressions-emotions-reaction-feelings_343059-4660.jpg?w=2000" alt="" />
        </div>
      <div className="profileContainer">
      <div className="uifo">
        <div className="left">
          <a href="">
            <FacebookTwoToneIcon/>
          </a>
          <a href="">
            <LinkedInIcon/>
          </a>
          <a href="">
            <InstagramIcon/>
          </a>
          <a href="">
            <PinterestIcon/>
          </a>
          <a href="">
            <TwitterIcon/>
          </a>
        </div>
        <div className="center">
            <spa className='name'>Asutosh sdihay</spa>
            <div className="info">
                <div className="items">
                  <PlaceIcon style={{color:"red"}} />
                  <span>NiyamatPur</span>
                </div>
                <div className="items">
                  <LanguageIcon/>
                  <span>English</span>
                </div>
            </div>
              <button>follow</button>
        </div>
        <div className="right">
              <EmailOutlinedIcon/>
              <MoreVertOutlinedIcon/>
        </div>
        </div>
      </div>
    </div>
    <div className='bottom_post'>
    <Posts/>
    </div>
    
    </>
  )
}

export default Profile
