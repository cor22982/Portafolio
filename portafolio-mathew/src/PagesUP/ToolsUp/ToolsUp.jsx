import React from 'react';
import Display from "../../Components/Display/Display";
import './ToolsUp.css';

const ToolsUp = () => {
  const toolsData = [
    { texto: "HTML", color: "#ffa260", hovercolor: "#e5ff60", percentage: 90, icon: "html" },
    { texto: "CSS", color: "#264de4", hovercolor: "#2965f1", percentage: 85, icon: "css" },
    { texto: "JavaScript", color: "#f0db4f", hovercolor: "#efd81d", percentage: 80, icon: "javascript" },
    { texto: "React", color: "#61dbfb", hovercolor: "#21a1f1", percentage: 75, icon: "react" },
    { texto: "Postgres", color: "#4faaff", hovercolor: "#64b2fa", percentage: 90, icon: "postgres" },
    { texto: "Github", color: "#bdbdbd", hovercolor: "#f3f3f3", percentage: 80, icon: "github" },
    { texto: "ExpressJs", color: "#e1dcd7", hovercolor: "#fbff22", percentage: 70, icon: "express" },
    { texto: "Aws", color: "#adb5c1", hovercolor: "#ff9900", percentage: 30, icon: "aws" },
    { texto: "Nginx", color: "#64fa00", hovercolor: "#f4f4f2", percentage: 60, icon: "nginx" },
    { texto: "Mysql", color: "#0992d6", hovercolor: "#f4ae6d", percentage: 60, icon: "mysql" },
    { texto: "Kotlin", color: "#f4ae6d", hovercolor: "#0992d6", percentage: 80, icon: "kotlin" }

    // Añade más lenguajes y herramientas según sea necesario
  ];

  return (
    <div className='contenido'>
      <h1 className="code-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Lenguajes y Herramientas que uso:
      </h1>
      <div className="herramientas">
        {toolsData.map((tool, index) => (
          <div key={index} className="tool-item">
            <Display texto={tool.texto} color={tool.color} hovercolor={tool.hovercolor} percentage={tool.percentage} />
            <img src={`https://skillicons.dev/icons?i=${tool.icon}`} className='logo-image-imagen' alt={`${tool.texto} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsUp;
