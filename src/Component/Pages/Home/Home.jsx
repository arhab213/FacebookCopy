import "./Home.css";
import TopBar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Rightbar from "../../rightbar/Rightbar";
import Feed from "../../Feed/Feed";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="HomeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
