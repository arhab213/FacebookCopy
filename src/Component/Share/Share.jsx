import "./Share.css";
import { Theaters, Label, Room, EmojiEmotions } from "@mui/icons-material";
export default function Share() {
  return (
    <div className="ShareContainer">
      <div className="ShareWrapper">
        <div className="ShareTop">
          <img className="shareProfileImage" src="/paysage1.jpg" alt="" />
          <input
            className="shareInput"
            placeholder="What's popping today?"
            type="text"
          />
        </div>
        <hr className="ShareHr" />
        <div className="ShareBottom">
          <div className="ShareOptions">
            <div className="ShareOption">
              <Theaters htmlColor="tomato" className="ShareOptionIcons" />
              <span className="ShareOptionText">Photo or video</span>
            </div>
            <div className="ShareOption">
              <Label htmlColor="blue" className="ShareOptionIcons" />
              <span className="ShareOptionText">Tag</span>
            </div>
            <div className="ShareOption">
              <Room htmlColor="green" className="ShareOptionIcons" />
              <span className="ShareOptionText">Location</span>
            </div>
            <div className="ShareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="ShareOptionIcons"
              />
              <span className="ShareOptionText">Feelings</span>
            </div>
            <button className="ShareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
