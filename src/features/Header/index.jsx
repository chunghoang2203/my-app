import React from 'react';
import { useState } from 'react';
import SearchIcon from './SearchIcon';
import SearchBar from './SearchBar';

function SearchMobile() {

    const [isShow, setIsShow] = useState(false)
    const handleClick = () => {
        setIsShow(!isShow)
    }

    return ( 
        <div className='header-mobile'>
            <SearchIcon onClick={handleClick}/>
            {isShow && <SearchBar />}
        </div>
     );
}

export default SearchMobile;