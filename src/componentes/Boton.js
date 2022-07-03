import React from "react";

function Boton({ texto , esBotonDeClick, manejarClick}) {
  return (
    <button
      className= {`font-sans hover:bg-[#00471b] w-[250px] h-[80px] text-[35px] font-bold text-[white] m-[5px] border-[2px] border-solid border-white cursor-pointer rounded-[15px]   ${esBotonDeClick ? 'bg-azul' : 'bg-morado'}`}
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;
