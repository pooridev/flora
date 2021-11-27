import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Search = (props) => {
    const [nav] = useState(true)
    const close = () => props.closesearch()

    const searchInputRef = useRef(null)
    const history = useHistory();
  
    const [searchValue, setSearchValue] = useState('');
  
    const searchInProductsHandler = e => {
      e.preventDefault();
      
      if (!searchValue) return
  
      history.push('/products/' + searchValue.toLowerCase().trim());
      close();
    };
  
    useEffect(() => searchInputRef.current.focus() ,[])
    
    return (
        <div className={`search-container ${nav ? 'search-true' : 'search-false'}`}>
        <form onSubmit={searchInProductsHandler} className='search__header'>
          <input
            ref={searchInputRef}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder='search for products'
          />
          <div className='search-close' onClick={close}>
            <i className='fas fa-times'></i>
          </div>
        </form>
        <p>
          Start typing and press the entere button to see products you looking
          for.
        </p>
      </div>
  
    )
}

export default Search
