import React from 'react';

const SearchBox = ( {searchfiled, onSearchChange}) => {
    return (
        <div className = 'pa2 tc tc-ns'>
            <input
                className='pa2-ns pa2 input-reset hover-white br-pill w-80 w-70-ns btnSS b ba b--white br-pill pointer white f6'
                type= 'search'
                placeholder= ' 住所からでも検索可能！'
                onChange= {onSearchChange}
            />
        </div>
    );
}

export default SearchBox;