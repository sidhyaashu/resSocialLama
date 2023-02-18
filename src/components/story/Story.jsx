import { useContext } from 'react';
import { AuthContext } from '../../contex/authContex';
import './Story.scss'

const Story = () => {

    const {currentUser} = useContext(AuthContext)

    const stories=[
        {
            id:1,
            name:"Rama Rao",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s"
        },
        {
            id:2,
            name:"Sigma Rao",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ7_2ZK23rp8fV_VueU6T4iAZtbILvOnVtBPXiEg&s"
        },
        {
            id:3,
            name:"Vishal Rao",
            img:"https://i.pinimg.com/236x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg"
        },
        {
            id:4,
            name:"Sudhir Rao",
            img:"https://i.pinimg.com/736x/4a/2d/6e/4a2d6e05b76c45c683cac34886fa0f4c--track.jpg"
        },
        {
            id:5,
            name:"Bishal Rao",
            img:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        },
        // {
        //     id:6,
        //     name:"shila Rao",
        //     img:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        // },
        // {
        //     id:7,
        //     name:"Munni Rao",
        //     img:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        // },
        // {
        //     id:8,
        //     name:"Djbabu Rao",
        //     img:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        // },
    ];

  return (
    <div className='stories'>
        <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" >
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Story
