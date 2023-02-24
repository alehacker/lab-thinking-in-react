import { useState } from 'react';

const ProductRow = ({allData}) =>{
   console.log('the data received', allData)
   const [rowData, setRowData]  = useState(allData)
   console.log('the data to work the ROW ===>', rowData)
   return(
      <div className="table-responsive">

         <table className='table'>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Price</th>
               </tr>
            </thead>

            <tbody>
               {rowData.map((product) => {
                  return(
                  <tr key={product.name}>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                  </tr>
                  )
               })}
            </tbody>

         </table>

      </div>
   )

}

export default ProductRow

