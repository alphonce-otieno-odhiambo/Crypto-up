import React from 'react';
// import {useRef} from 'react';

function SearchBar({term, keyWord, coinss}) {
    // const inputEl = useRef("")
    // const getSearchTerm = ( ) => {
    //    keyWord(inputEl.current.value)
    // }
    
  return (
    <div  className='p-2  grid place-items-center' >
       <input className='bg-gray-700 text-white p-2 h-10 rounded-md border-none outline-none pl-3 mb-2' 
    //    rer={inputEl}
       type='text' placeholder='Search'
    //    value={term}
    //    onChange={getSearchTerm}
    //    coinss={coinss}
       />
    </div>
  )
}

export default SearchBar