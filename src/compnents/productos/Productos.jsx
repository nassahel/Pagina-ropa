import React from 'react'

function Productos() {

    
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>console.log(json))

  return (
    <div>
       

    </div>
  )
}

export default Productos