import React from 'react'

export const Card = ( { product} ) => {

  const { brand, title, description, images : [ img], price, stock} = product;

  return (
    <article className='w-72 h-auto flex justify-center flex-col mb-4 border-2 border-slate-100 p-4 rounded-md shadow-md'>
        <img src={img} alt="product img" className='w-fit h-40 m-auto'/>
        <h1>{title}</h1>
          <h2>{brand}</h2>
          <h3 className='text-slate-400'>{description}</h3>
          <p><strong>Price: </strong>{price}</p>
          <p><strong>Avalaibility: </strong>{stock}</p>
            <input type="button" value="Add to Cart" className='bg-red-400 mt-4 w-1/2 m-auto rounded-lg text-white uppercase cursor-pointer' />



    </article>
  )
}
