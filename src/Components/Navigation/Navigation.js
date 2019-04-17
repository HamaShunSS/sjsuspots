import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns tc bg-dark-gray { background-color: #333333 }'>
            <p className="b f3 pa3 ph4 fl w-100 w-100-ns tc">All For One</p>
            <p onClick={() => onRouteChange('form')} className='fl w-100 w-100-ns tc f4 link dim pa3 pointer'>Form</p>
            <p onClick={() => onRouteChange('home')} className='fl w-100 w-100-ns tc f4 link dim pa3 pointer'>Home</p>
            <p onClick={() => onRouteChange('thankyou')} className='fl w-100 w-100-ns tc f4 link dim pa3 pointer'>Thank you</p>
        </nav>
    );
}

export default Navigation;