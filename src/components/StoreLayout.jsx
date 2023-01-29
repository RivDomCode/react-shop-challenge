import { useEffect, useState } from 'react';
import { Card } from './Card'

export const StoreLayout = () => { 
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
    }, [])
    
  return (
    <div className='p-4 flex flex-wrap gap-x-4 justify-center' >
        {products.map(product=> (
            <Card key = {product.id} product ={product}/>
          ))}
    </div>
  )
}
