import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contex/authContex'
import './Comments.scss'

const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  console.log(currentUser.profilepic)

    const comments =[
        {
            id:1,
            desc:"hi my name i sLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facilis. asutosh siddhya so you can call me noe",
            name:"Rama Rao",
            userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            
        },
        {
            id:2,
            desc:"hi vbsdjbvd hi vbsdjbvdas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my  hi vbsdjbvdas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my name is asutosh siddhya so you can call me noe hi vbsdjbvdas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my name is asutosh siddhya so you can call me noe hi vbsdjbvdas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my name is asutosh siddhya so you can call me noe hi vbsdjbvdas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my name is asutosh siddhya so you can call me noename is asutosh siddhya so you can call me noeas jbvisbvsb vlsbivb svbshvbliadvbjhsvcs dbvjhvjhsvkjkhvkvhsv dvkjsvhsdvsh vsvdvvvhuh vbhbliugjbdvdv my name is asutosh siddhya so you can call me noe",
            name:"Sigma visal shiva roy dg dfsd sfdgfd Rao",
            userId:2,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ7_2ZK23rp8fV_VueU6T4iAZtbILvOnVtBPXiEg&s",
        },
        {
          id:3,
          desc:"hi my name i sLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facilis. asutosh siddhya so you can call me noe",
          name:"Rama Rao",
          userId:3,
          profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
          
      }
    ]

  return (
    <div className='comments'>

      <div className="write">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjlCIxWaSMDVruKZJSTF4UHjhCmtCpzqtFh4AZ2905Q&s" alt="" />
        <input type="text" placeholder='Write a comment' />
        <button>send</button>
      </div>

      {comments.map((comment)=>(
        <div className="comment">
            <NavLink className="navlinkk" to={`/profile/${comment.userId}`}>
            <img src={comment.profilepic} alt=""/>
            <div className="infos">
                <span>{comment.name}</span>
                <p>1 hour ago</p>
            </div>
            </NavLink>
            <span>{comment.desc}</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
