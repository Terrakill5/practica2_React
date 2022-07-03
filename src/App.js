import "./App.css";
import Contador from "./componentes/Contador";
import Boton from "./componentes/Boton";
import freeCodeCampLogo from "./imagenes/freecodecamp_logo.jpg";
import {  useState } from "react";
function App() {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }
  return (
    <div className="App flex flex-wrap items-center justify-center pt-[15px]">
      <div className="w-full flex items-center justify-center m-[20px]">
        <img
          className="h-[50px] "
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="h-[550px] min-w-[600px] flex flex-wrap flex-col items-center justify-center">
        <Contador numClicks={numClicks}/>
        <Boton 
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
