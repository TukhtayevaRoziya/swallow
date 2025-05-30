import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Game1 from "./component/Game/Game1";
import Game2 from "./component/Game/Game2";
import MazeGame from "./component/Game/MazeGame";
import FindTheImageGame from "./component/Game/FindTheImageGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game_1" element={<Game1 />} />
        <Route path="/game_2" element={<Game2 />} />
        <Route path="/game_3" element={<MazeGame />} />
        <Route path="/game_4" element={<FindTheImageGame />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}
export default App;