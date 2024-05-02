import "./App.css";
import bo1 from "./assets/bo1.jfif";
import bo2 from "./assets/bo2.jfif";
import bo3 from "./assets/bo3.jfif";

const App = () => {
  return (
    <div>
      <header>
        <h1>Single Page Application</h1>
      </header>
      <div className="container">
        <div className="box">
          <a href="https://m-lyart.vercel.app/pluto_t5_full_game.torrent">
            <img src={bo1} alt="Image 1" />
          </a>
          <h4>Bo1</h4>
        </div>
        <div className="box">
          <a href="https://m-lyart.vercel.app/pluto_t6_full_game.torrent">
            <img src={bo2} alt="Image 2" />
          </a>
          <h4>bo2</h4>
        </div>
        <div className="box">
          <a href="https://m-lyart.vercel.app/t7_full_game.torrent">
            <img src={bo3} alt="executavel do bo3" />
          </a>
          <h4>bo3</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
