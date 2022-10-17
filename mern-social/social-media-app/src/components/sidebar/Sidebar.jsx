import "./sidebar.css"
import Stream from '@mui/icons-material/Stream';
import Chat from '@mui/icons-material/Chat';
import Groups from '@mui/icons-material/Groups';
import Bookmark from '@mui/icons-material/Bookmark';
import Videocam from '@mui/icons-material/Videocam';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Stream className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Saved</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                </ul>
                <button className="sidebarButton"> Show More </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u)=>(
                        <CloseFriend user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}