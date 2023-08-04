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

  let destacados = productos.filter(mayorPrecio => {return mayorPrecio.price > 30}) 

  return (
    <div>
      {destacados.map((props) => (
        <div className='card-products'>
          <img className='img-products' src={props.image} alt={props.title} />
          <p>{props.title}</p>
          <p>{props.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Productos 