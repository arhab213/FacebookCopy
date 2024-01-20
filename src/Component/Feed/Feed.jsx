import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";

export default function Feed() {
  return (
    <div className="FeedContainer">
      <div className="FeedWrapped">
        <Share />
        <Post />
      </div>
    </div>
  );
}
