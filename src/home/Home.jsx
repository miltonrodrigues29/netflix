import Navbar from "../components/navbar/Navbar";
import "./home.scss";
export const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <img
        className="bgimg"
        src="https://wallpapercave.com/wp/wp5289106.jpg"
        alt=""
      ></img>
    </div>
  );
};
