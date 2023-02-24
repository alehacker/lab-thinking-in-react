import { useState } from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({jsondata}) =>{
   const[allData, setAllData] = useState(jsondata)
   console.log ('The data to work the table===>', jsondata)

   return(
      <div className='row'>
         <ProductRow allData={allData}/>
      </div>
   )
   //The data I am getting shows as undefined.  The state is not being passed
}

export default ProductTable