import Post from "../post/Post"


const Posts = () => {
    const posts =[
        {
            id:1,
            name:"Rama Rao",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            desc:"Tune mera dil lutia ho ho"
        },
        {
            id:2,
            name:"Sigma Rao",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ7_2ZK23rp8fV_VueU6T4iAZtbILvOnVtBPXiEg&s",
            userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            desc:"chammak chelleo",
        },
        {
            id:3,
            name:"Vishal Rao",
            img:"https://i.pinimg.com/236x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg"
        ,   userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            desc:"bum chiki chikni chiki",
        },
        {
            id:4,
            name:"Sudhir Rao",
            img:"https://i.pinimg.com/736x/4a/2d/6e/4a2d6e05b76c45c683cac34886fa0f4c--track.jpg"
        ,userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            desc:"dil mange mor",
        },
        {
            id:5,
            name:"Bishal Rao",
            img:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        , userId:1,
            profilepic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVK9QBypdDueuIvGWav3dCoG0lFaOKjGT-Y72lNI&s",
            desc:"tera bap chutia",
        }
    ]
  return (
    <div className='posts'>
        
      {posts.map(post=>(
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
