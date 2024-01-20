import "./Post.css";
import { MoreVert } from "@mui/icons-material";
export default function Post() {
  return (
    <div className="PostContainer">
      <div className="PostWrapper">
        <div className="PostTop">
          <div className="PostTopLeft">
            <img className="PostProfileImage" src="/paysage1.jpg" alt="" />
            <span className="PostUsername">Arhab Med Riad</span>
            <span className="PostDate">5 min ago</span>
          </div>
          <div className="PostTopRight">
            <MoreVert className="PostOptions" />
          </div>
        </div>
        <div className="PostCenter">
          <span className="PostText">My now Shoot 😜</span>
          <img className="PostImage" src="/paysage2.jpg" alt="" />
        </div>
        <div className="PostBottom">
          <div className="PostBottomLeft">
            <img className="PostReactionIcons" src="/like.png" alt="" />
            <img className="PostReactionIcons" src="/heart.png" alt="" />
            <span className="PostReactionCounter">
              32 personne like your image
            </span>
          </div>
          <div className="PostBottomRight">
            <span className="PostCommentsCounter">12 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
