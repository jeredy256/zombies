import "./App.css";
import bo1 from "../../assets/bo1.jfif";
import bo2 from "../../assets/bo2.jfif";
import bo3 from "../../assets/bo3.jfif";
import bit from "../../assets/bit.png"
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDiscord} from '@fortawesome/free-brands-svg-icons'



const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')

  }
  
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
    // Verifica se já existe um contador no localStorage
    const visitasAnteriores = localStorage.getItem('contadorVisitas');
    
    if (visitasAnteriores) {
      // Se existir, atualiza o estado com o valor do localStorage
      setContador(parseInt(visitasAnteriores));
    } else {
      // Se não existir, define o contador como 0
      localStorage.setItem('contadorVisitas', '0');
      setContador(0); // Aqui atualizamos o contador no estado inicial
    }

    // Incrementa o contador de visitas
    const contadorAtualizado = parseInt(visitasAnteriores || '0') + 1;
    localStorage.setItem('contadorVisitas', contadorAtualizado.toString());
    setContador(contadorAtualizado); // Aqui atualizamos o contador após incrementá-lo
  }, []);
  const resetarContador = () => {
    localStorage.setItem('contadorVisitas', '0');
    setContador(0);
  };


  return (
    <div className={darkMode ?  'darck-mode' : ''}>
      <header >
        {/* <button onClick={toggleDarkMode}>{isDarkMode ? 'modo claro ' : 'modo escuro'}</button> */}
        <h1 className="pico">Local 
          Downloads</h1>
          <div>
            <button onClick={toggleDarkMode}>{darkMode ? 'modo claro ' : 'modo escuro'}</button>
          </div>
          
      </header>
      <button onClick={resetarContador}>reser</button>
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
      <footer className="jere">
        
        <div >
        <p>Entre em nosso servidor no Discord:</p>
      <a href="https://discord.gg/rrddT5vTxW">
        <FontAwesomeIcon icon={faDiscord} /> Discord
      </a>
        </div>
        <p  className="picoo">Total de visitantes: {contador} </p>
      </footer>
    </div>
  );
};

export default App;
