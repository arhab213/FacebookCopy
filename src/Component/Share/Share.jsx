import "./Share.css";
import {
  Theaters,
  Label,
  Room,
  EmojiEmotions,
  TheatersRounded,
} from "@mui/icons-material";
export default function Share() {
  return (
    <div className="ShareContainer">
      <div className="ShareWrraped">
        <div className="ShareTop">
          <img className="ShareProfileImage" src="/paysage1.jpg" alt="" />
          <input
            className="ShareInpute"
            placeholder="what's popping today ?"
            type="text"
          />
        </div>
        <hr className="ShareHr" />
        <div className="ShareBottom">
          <div className="ShareOptions">
            <div className="ShareOption">
              <Theaters htmlColor="tomato" className="ShareOptionsIcon" />
              <span className="ShareOptionName">Video</span>
            </div>
            <div className="ShareOption">
              <Label htmlColor="blue" className="ShareOptionsIcon" />
              <span className="ShareOptionName">Tag</span>
            </div>
            <div className="ShareOption">
              <Room htmlColor="green" className="ShareOptionsIcon" />
              <span className="ShareOptionName">Localisation</span>
            </div>
            <div className="ShareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="ShareOptionsIcon"
              />
              <span className="ShareOptionName">Feelings</span>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
