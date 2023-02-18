import '../post/Post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { NavLink } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';


const Post = ({post}) => {

    const [commentOpeen,setCommentOpen]=useState(false)

    const like = false;

  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <div className="details">
                        <NavLink style={{textDecoration:"none",alignItems:"center",gap:"10px",display:"flex",color:"inherit"}} to={`/profile/${post.userId}`}>
                        <img src={post.profilepic} alt="" />
                        <div className="nameanddate">
                        <span className='name'>{post.name}</span>
                        <span className="date">1 min ago</span>
                        </div>
                        </NavLink>
                    </div>
                </div>
                    <MoreVertOutlinedIcon style={{"cursor":"pointer"}}/>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {like? <FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
                    12 <span>likes</span>
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpeen)}>
                    <TextsmsOutlinedIcon/>
                    12<span> comments</span>
                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    12<span> share</span>
                </div>
            </div>
            {commentOpeen && <Comments/>}
        </div>
    </div>
  )
}

export default Post
