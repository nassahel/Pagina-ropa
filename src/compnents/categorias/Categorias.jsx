import React from 'react'
import Productos from '../productos/Productos'

function Categorias() {


  let unProducto =  Productos.map((prod) =>{
        {prod.description}
})

console.log(unProducto);

   

  return (
    <div className='categorias'>
        <div className='populares' >


    <h2>Las mas vendidas</h2>
        </div>
        <div className='accesibles' >
    <h2>Precios accesibles</h2>
        </div>
    </div>

    
  )
}

export default Categorias