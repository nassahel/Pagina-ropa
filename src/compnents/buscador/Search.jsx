import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './search.css'

const Search = () => {
  return (
    <div className='search'>
        <input type="search" name="" id="" placeholder='Buscar' />

        <SearchIcon className='search-icon'
        fontSize='large'/>
    </div>
  )
}

export default Search
