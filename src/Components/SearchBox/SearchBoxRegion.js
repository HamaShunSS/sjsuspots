import React from 'react';

const SearchBoxRegion = ( {searchfiledRegion, onSearchChangeRegion}) => {
    return (
        <div className = ''>
            <input
                className= 'ma2 pa1 input-reset bg-white hover-bg-black hover-white br-pill w-90 w-90-ns'
                type= 'search'
                placeholder= '地域の名前から探してみて！'
                onChange= {onSearchChangeRegion}
            />
        </div>
    );
}

export default SearchBoxRegion;