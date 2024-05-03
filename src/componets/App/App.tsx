import "./App.css";
import bo1 from "../../assets/bo1.jfif";
import bo2 from "../../assets/bo2.jfif";
import bo3 from "../../assets/bo3.jfif";
import bit from "../../assets/bit.png"
import { useState } from "react";



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aqui você pode adicionar lógica para alternar entre os temas claro e escuro
    // Por exemplo, você pode alterar as classes do body ou adicionar uma classe ao elemento raiz do aplicativo
    if (isDarkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };


  return (
    <div>
      <header>
        <h1 className="pico">Local 
          Downloads</h1>
          <div><label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="hidden"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 ${
            isDarkMode ? 'left-4' : 'left-0'
          }`}
        ></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">Modo {isDarkMode ? 'Escuro' : 'Claro'}</div>
    </label></div>
          
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
