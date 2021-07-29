import React,{useState} from 'react'

const Search = (props) => {
    const [nav, setnav] = useState(true)
    const close = ()=>{
        // setnav(false)
        // setInterval(() => {
        //     setnav(true)
        //     props.closesearch()
        // }, 300);
        // setInterval(() => {
        // }, 290);
        props.closesearch()
    }
    return (
        <div className={`search-container ${nav ? 'search-true' : 'search-false'}`}>
           <div className='search__header'>
           
            <input placeholder='search for products'  />
            <div className='search-close' onClick={close}>
              <i class="fas fa-times"></i>

            </div>
           </div>
            <p>Start typing to see products you looking for.</p>
        </div>
    )
}

export default Search
