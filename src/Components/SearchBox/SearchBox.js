import React from 'react';

const SearchBox = ( {searchfiled, onSearchChange}) => {
    return (
        <div className = 'pa2'>
            <input
                className= 'pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns'
                type= 'search'
                placeholder= '場所の名前から探してみて！'
                onChange= {onSearchChange}
            />
        </div>
    );
}

export default SearchBox;