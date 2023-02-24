import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <h1>IronStore</h1>
            <SearchBar products={products}/>
            <ProductTable products={products} />
        </div>
      </div>    
  )
}

export default ProductsPage