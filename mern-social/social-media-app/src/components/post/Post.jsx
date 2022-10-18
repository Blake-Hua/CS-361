import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}){
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(post.like)
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    useEffect(()=>{
        const fetchUser = async () =>{
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data)
        }
        fetchUser();
    }, [post.userId])

    const likeHandler =()=>{
        try{
            axios.put("/posts/"+post._id+"/like", {userId:currentUser._id})
        }catch(err){}
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username)
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className= "postImg" src={PF+post.img} alt=""/>
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