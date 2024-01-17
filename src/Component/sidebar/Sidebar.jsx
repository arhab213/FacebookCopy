import "./Sidebar.css";
import {
  RssFeed,
  PlayCircle,
  Groups,
  Cast,
  Bookmark,
  Event,
  QuestionMark,
  Chat,
} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapped">
        <div className="sidebarList">
          <div className="sidebarListItem">
            <RssFeed className="sidebarItemIcon" />
            <span className="sidebarItemName">Feed</span>
          </div>
          <div className="sidebarListItem">
            <Chat className="sidebarItemIcon" />
            <span className="sidebarItemName">Chat</span>
          </div>
          <div className="sidebarListItem">
            <PlayCircle className="sidebarItemIcon" />
            <span className="sidebarItemName">Video</span>
          </div>
          <div className="sidebarListItem">
            <Groups className="sidebarItemIcon" />
            <span className="sidebarItemName">Groups</span>
          </div>
          <div className="sidebarListItem">
            <Cast className="sidebarItemIcon" />
            <span className="sidebarItemName">Live</span>
          </div>
          <div className="sidebarListItem">
            <Bookmark className="sidebarItemIcon" />
            <span className="sidebarItemName">Bookmark</span>
          </div>
          <div className="sidebarListItem">
            <Event className="sidebarItemIcon" />
            <span className="sidebarItemName">Event</span>
          </div>
          <div className="sidebarListItem">
            <QuestionMark className="sidebarItemIcon" />
            <span className="sidebarItemName">Questions</span>
          </div>
        </div>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr" />
        <div className="sidebarfriendList">
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
          <div className="sidebarFriend">
            <img className="sidebarFriendImage" src="/paysage1.jpg" alt="" />
            <span className="sidebarFriendName">Jone Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
