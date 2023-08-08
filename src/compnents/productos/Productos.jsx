import React, { useEffect, useState } from 'react'
import '../styles/productos.css'

function Productos() {

  const [productos, setProductos] = useState([])

  const productList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    setProductos(products)

  }

  useEffect(() => {
    productList()
  }, []) // Para que se renderice una sola vez

  let destacados = productos.filter(mayorPrecio => { return mayorPrecio.price > 30 })

  return (
    <div className='contenedor-productos'>
      {destacados.map((props) => (
        <div className='card-products'>
          <div className='img-products'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='contenedor-texto'>
            <p className='titulo'>{props.title}</p>
            <p className='precio'>${props.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Productos 