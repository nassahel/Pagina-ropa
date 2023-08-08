import react from "react";
import Productos from '../productos/Productos'

function Categorias() {


  return (
    <div className='categorias'>
      <h2 className="titulo-destacado">Los Mas Destacados</h2>
      <Productos/> 
      <div className='accesibles' >
        <h2>Precios accesibles</h2>
      </div>
    </div>
  )
}

export default Categorias