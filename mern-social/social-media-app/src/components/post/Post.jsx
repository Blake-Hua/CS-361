import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import { Users } from "../../dummyData"
import { useState } from "react";

export default function Post({post}){
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(post.like)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler =()=>{
        setLike(isLiked ? like+1 : like-1)
        setIsLiked(!isLiked)
    }

    const user = Users.filter(u=>u.id===1)
    console.log(user[0].username)
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u)=>u.id=== post.userId)[0].profilePicture} alt=""/>
                        <span className="postUsername">{Users.filter((u)=>u.id=== post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className= "postImg" src={PF+post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite htmlColor="tomato" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}