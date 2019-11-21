import React from 'react';

const SearchBox = ( {searchfiled, onSearchChange}) => {
    return (
        <div className = 'pa2 tl tc-ns mb2'>
            <input
                className='pa2-ns pv1 ph2 ml1 input-reset hover-white w-60 w-70-ns btnSS b br-pill pointer white f6'
                type= 'search'
                placeholder= ' 住所からでも検索可能！'
                onChange= {onSearchChange}
            />
        </div>
    );
}

export default SearchBox;