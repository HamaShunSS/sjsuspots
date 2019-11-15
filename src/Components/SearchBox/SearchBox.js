import React from 'react';

const SearchBox = ( {searchfiled, onSearchChange}) => {
    return (
        <div className = 'pa2 tl tc-ns'>
            <input
                className= 'pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-50 w-70-ns f6'
                type= 'search'
                placeholder= '住所からでも検索可能！'
                onChange= {onSearchChange}
            />
        </div>
    );
}

export default SearchBox;