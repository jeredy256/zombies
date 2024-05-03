import "./App.css";
import bo1 from "../../assets/bo1.jfif";
import bo2 from "../../assets/bo2.jfif";
import bo3 from "../../assets/bo3.jfif";
import bit from "../../assets/bit.png"

const App = () => {
  return (
    <div>
      <header>
        <h1 className="pico">Local 
          Downloads</h1>
      </header>
      <div className="container">
        <div className="box">
          <a href="https://m-lyart.vercel.app/pluto_t5_full_game.torrent">
            <img src={bo1} alt="Image 1" />
          </a>
          <h4>Bo1</h4>
          <a href="https://m-lyart.vercel.app/t5_dlcs.torrent"><h5>Full dlcs</h5></a>
        </div>
        <div className="box">
          <a href="https://m-lyart.vercel.app/pluto_t6_full_game.torrent">
            <img src={bo2} alt="Image 2" />
          </a>
          <h4>bo2</h4>
          <a href="https://m-lyart.vercel.app/t6_dlcs.torrent"><h5>Full dlcs</h5></a>
        </div>
        <div className="box">
          <a href="https://m-lyart.vercel.app/t7_full_game.torrent">
            <img src={bo3} alt="executavel do bo3" />
          </a>
          <h4>bo3</h4>
          <a href="https://m-lyart.vercel.app/boiii.exe"><h5>Executavel do bo3</h5></a>
          <a href="https://m-lyart.vercel.app/t7_full_game.torrent"><h5>Full dlcs</h5></a>
        </div>
        <div className="box">
          <a href="https://www.fosshub.com/qBittorrent.html"><img src={bit} alt="qbittorrent" /><h5>Download</h5></a>

        </div>
      </div>
    </div>
  );
};

export default App;
