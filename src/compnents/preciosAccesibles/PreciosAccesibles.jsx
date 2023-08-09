import React, { useEffect, useState } from 'react'


function PreciosAccesibles() {

  const [accesibles, setAccesibles] = useState([])

  const accesiblesList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const acces = await data.json()
    setAccesibles(acces)

  }

  useEffect(() => {
    accesiblesList()
  }, []) // Para que se renderice una sola vez

  let preciosAccesibles = accesibles.filter(menorPrecio => { return menorPrecio.price < 30 })

  return (
    <div className='contenedor-productos'>
      {preciosAccesibles.map((props) => (
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

export default PreciosAccesibles 