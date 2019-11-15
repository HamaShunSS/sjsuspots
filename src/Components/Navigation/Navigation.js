import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns bg-dark'>

            <div className="">
                    <h3 className='ma3 mv4-ns'>All For One</h3></div>
            <div className="ml4 ml7-ns">
            </div>
            <div className="ml7-ns">
            </div>
            <div className="fl ml5 ml2-ns ma3">
                <h3 onClick={() => onRouteChange('form')} className='fl f5 f4-ns link dim pr5-ns pr3 pt2-ns'>シェア</h3>
                <h3 onClick={() => onRouteChange('/')} className='fl f5 f4-ns link dim pr3-ns pt2-ns'>ホーム</h3>
            </div>
        </nav>
    );
}

export default Navigation;