import { useState } from 'react';

const SearchBar = ({products, onSearch}) =>{
   const [query, setQuery] = useState('');

   const handleSearch = (e) => {
      const newQuery = e.target.value.toLowerCase();
      console.log('here is the query', newQuery)
      setQuery(newQuery)
      const filteredProducts = products.filter(
        (product) => product.name.toLowerCase().includes(newQuery)
      );
      console.log ('result of the query ===>', filteredProducts)
      onSearch(filteredProducts);
    };
 
   return (
     <div className="input-group mb-3">
       <input type="text" className="form-control" placeholder="Search products" value={query} onChange={handleSearch} />
     </div>
   )


}

export default SearchBar