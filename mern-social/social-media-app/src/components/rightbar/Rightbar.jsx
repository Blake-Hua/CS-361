import "./rightbar.css"
import Celebration from '@mui/icons-material/Celebration';
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightBar = () => {
        return (
            <>
                 <div className="birthdayContainer">
                    <Celebration htmlColor="Crimson" className="birthdayIcon"/>
                    <span className="birthdayText">
                        <b>Ricky Bobby</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Vietnam</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt=""/>
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
            </div>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt=""/>
                    <span className="rightbarFollowingName">William Cordet</span>
                </div>
            </div>

            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}

