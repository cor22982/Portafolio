import Slider from "./SwiperSlide/Slider";
import { useState } from "react";
import './App.css';
import ToolsUp from "./PagesUP/ToolsUp/ToolsUp";

function App() {
  const [mostrarComponente1, setMostrarComponente1] = useState(false); // Cambiado a false

  const toggleComponente = () => {
    setMostrarComponente1(!mostrarComponente1);
  };

  return (
    <div>
      <div className={`informacion ${mostrarComponente1 ? 'abierto' : 'oculto'}`}>
        <div className="boton-e">
          <button onClick={toggleComponente} className="quit">X</button>
        </div>
        <ToolsUp></ToolsUp>
      </div>
      <div >
        <Slider goto={toggleComponente}></Slider>
      </div>
    
    </div>
  );
}

export default App;

