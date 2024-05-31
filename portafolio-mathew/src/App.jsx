import Slider from "./SwiperSlide/Slider";
import { useState } from "react";
import './App.css';
import ToolsUp from "./PagesUP/ToolsUp/ToolsUp";
import WorkUp from "./PagesUP/WorkUp/WorkUp";
import PortaUp from "./PagesUP/PortaUp/PortaUp";
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
        <PortaUp/>
      </div>
      <div >
        <Slider goto={toggleComponente}></Slider>
      </div>
    
    </div>
  );
}

export default App;

