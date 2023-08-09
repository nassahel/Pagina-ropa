import react from "react";
import Destacados from '../destacados/Destacados'
import PreciosAccesibles from "../preciosAccesibles/PreciosAccesibles";

function Categorias() {


  return (
    <div className='categorias'>
      <h2 className="titulo-destacado">Los Mas Destacados</h2>
      <Destacados/> 
      <div className='accesibles' >
        <h2>Precios accesibles</h2>
        <PreciosAccesibles/>
      </div>
    </div>
  )
}

export default Categorias