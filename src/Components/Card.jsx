import React from 'react'

const Card = ({deporte, nombre, jugador}) => {
  return (
    <div>
        <h3>Tu nombre es {nombre}, te gusta el {deporte} y tu jugador favorito es {jugador}</h3>
    </div>
  )
}

export default Card