import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
import List from "../components/list/List";
export const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type="series"></Featured>
      <List></List>
      <List></List>
      <List> </List>
    </div>
  );
};
