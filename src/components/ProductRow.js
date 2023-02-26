import { useState, useEffect } from 'react';

const ProductRow = ({allData}) =>{
   console.log('the data received', allData)
   const [rowData, setRowData]  = useState(allData)
   console.log('the data to work the ROW ===>', rowData)

   useEffect(() =>{
      setRowData(allData);
   }, [allData])
   return(
      <div className="table-responsive w-100">

         <table className='table'>
         <thead className='table-header'>
               <tr>
                  <th className="col-6">Name</th>
                  <th className="col-6">Price</th>
               </tr>
            </thead>

            <tbody>
               {rowData.map((product) => {
                  return(
                  <tr key={product.name}>
                     <td className={product.inStock ? '' : 'text-danger col-6'}>
                        {product.name}
                     </td>
                     <td className="col-6">{product.price}</td>
                  </tr>
                  )
               })}
            </tbody>

         </table>

      </div>
   )

}

export default ProductRow

