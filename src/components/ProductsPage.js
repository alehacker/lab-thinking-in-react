import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage ({productData}) {
  
  const [products, setProducts] = useState(productData);


  const handleSearch = (filteredProducts) => {
   setProducts(filteredProducts);
 }
  
  return(
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <h1>IronStore</h1>
            <SearchBar products={products} onSearch={handleSearch}/>
            <ProductTable products={products} /> 
        </div>
      </div>    
  )
}

export default ProductsPage