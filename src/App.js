
import './App.css';
import ProductsPage from './components/ProductsPage';
import { useState } from 'react';
import json from './data.json'


function App() {

   const [productData, setProductData] = useState(json)
   console.log('The Original DATA ==>>>', productData)

  return (
    <div className="App">
      <div className='container'>
         <ProductsPage  productData={productData}/>
      </div> 
    </div>
  );
}

export default App;
