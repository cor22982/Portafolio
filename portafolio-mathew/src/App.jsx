import Slider from "./SwiperSlide/Slider";
import { useState } from "react";
import './App.css';
import ToolsUp from "./PagesUP/ToolsUp/ToolsUp";
import WorkUp from "./PagesUP/WorkUp/WorkUp";
import PortaUp from "./PagesUP/PortaUp/PortaUp";
import StudyUp from "./PagesUP/StudyUp/StudyUp";

function App() {
  const [mostrarComponente1, setMostrarComponente1] = useState(false); // Cambiado a false
  const [selectpage , setSelectPage] = useState(0);
  const toggleComponente = (page) => {
    setMostrarComponente1(!mostrarComponente1);
    setSelectPage(page)
  };

  return (
    <div>
      <div className={`informacion ${mostrarComponente1 ? 'abierto' : 'oculto'}`}>
        <div className="boton-e">
          <button onClick={toggleComponente} className="quit">X</button>
        </div>
        {selectpage === 1 && <PortaUp />}
        {selectpage === 2 && <ToolsUp />}
        {selectpage === 3 && <WorkUp />}
        {selectpage === 4 && <StudyUp />}
      </div>
      <div >
        <Slider goto={toggleComponente}></Slider>
      </div>
    
    </div>
  );
}

export default App;

