import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
export const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type="movie"></Featured>
    </div>
  );
};
