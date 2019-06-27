import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns navbar bg-dark'>

            <div className="">
                    <h2 className='f3 mv4-ns'>All For One</h2></div>
            <ul>
                <h4 onClick={() => onRouteChange('form')} className='fl f6 f4-ns link dim pr5-ns pr3 pt2-ns'>シェア</h4>
                <h4 onClick={() => onRouteChange('home')} className='fl f6 f4-ns link dim pr3-ns pt2-ns'>ホーム</h4>
            </ul>
        </nav>
    );
}

export default Navigation;