import React from 'react'

const Item = ({id, name, stock, category, image}) => {
  return (
    <div>
        <div key={id}></div>
        <img src={image} />
        <h2>{name}</h2>
        <h4>{category}</h4>
        <p>{stock}</p>
    </div>
  )
}

export default Item