import React from 'react'

const Book = (props) => {
  // Atrribute,eventHandler
  //onClick, onMouseOver.
  const { image, title, author } = props

  //if children is destructured, you can access it like other members of the props
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert(`hello lanre,the author is ${author}`)
  }
  return (
    <article className='book'>
      <img src={image} alt='img' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
    </article>
  )
}

export default Book
