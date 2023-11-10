import React from 'react'

const Services = ({ titulo1, titulo2, titulo3, parrafo, boton }) => {
  return (
    <section className='cards contenedor'>
      <h2 className='titulo'>{titulo1}</h2>
      <div className='content-cards'>
        <article className='card'>
          <i className='far fa-clone' />
          <h3>{titulo2}</h3>
          <p>{parrafo}</p>
          <a href='' className='cta'>{boton}</a>
        </article>
        <article className='card'>
          <i className='fas fa-database' />
          <h3>{titulo3}</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a href='' className='cta'>{boton}</a>
        </article>
        <article className='card'>
          <i className='far fa-object-group' />
          <h3>Title Card</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a href='' className='cta'>Learn more</a>
        </article>
      </div>
    </section>
  )
}

export default Services
