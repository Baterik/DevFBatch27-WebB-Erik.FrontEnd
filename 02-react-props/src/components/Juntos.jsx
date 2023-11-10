import React from 'react'

const Juntos = ({ titulo, parrafo }) => {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{titulo}</h2>
        <p>{parrafo}</p>
      </div>
    </section>
  )
}

export default Juntos
