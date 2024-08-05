import React from 'react'

const Producto = (props) => {
  return (
    <>
      <div>{props.nombre}</div>
      <div>{props.precio}</div>
      <img src={props.imagen} />
    </>
  )
}

export default Producto
