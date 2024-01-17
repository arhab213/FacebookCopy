import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";
function TopBar() {
  return (
    <>
      <div className="TopBarContainer">
        <div className="TopBarLeft">
          <div className="Logo">The Hand</div>
        </div>
        <div className="TopBarCenter">
          <div className="searchbarContainer">
            <Search className="searchIcon" />
            <input
              className="searchbarInput"
              type="text"
              placeholder="What do you need today ?"
            />
          </div>
        </div>
        <div className="TopBarRight">
          <div className="TopBarLinks">
            <div className="TopBarLink">Home</div>
            <div className="TopBarLink">Highlight</div>
          </div>
          <div className="TopBarIcons">
            <div className="TopbarIcon">
              <Person />
              <span className="TopBarIconBadge">1</span>
            </div>
            <div className="TopbarIcon">
              <Notifications />
              <span className="TopBarIconBadge">2</span>
            </div>
            <div className="TopbarIcon">
              <Chat /> <span className="TopBarIconBadge">3</span>
            </div>
          </div>
          <div className="TopBarImage">
            <img className="ProfileImage" src="/paysage2.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default TopBar;
