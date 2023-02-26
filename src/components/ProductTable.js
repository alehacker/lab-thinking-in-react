import { useState } from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({products}) =>{
   const[allData, setAllData] = useState(products)
   console.log ('The data to work the table===>', allData)

   return(
      <div className='row'>
         <ProductRow allData={allData}/>
      </div>
   )
  
}

export default ProductTable