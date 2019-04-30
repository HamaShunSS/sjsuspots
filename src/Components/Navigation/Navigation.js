import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns tc bg-dark-gray { background-color: #333333 }'>
            <div className="mr5 ">
                <p className="b pa2 ph4 fl f6 f3-ns pr5-ns">All For One</p>
            </div>
            <p onClick={() => onRouteChange('form')} className='fl w-100 f6 f4-ns link dim pr2 pt3 pt4-ns pl7-ns'>シェアする</p>
            <p onClick={() => onRouteChange('home')} className='fl w-100 f6 f4-ns link dim pr2 pt3 pt4-ns'>ホーム</p>
        </nav>
    );
}

export default Navigation;