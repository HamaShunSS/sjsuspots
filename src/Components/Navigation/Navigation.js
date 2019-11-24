import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-dark'>

            <div className="">
                    <h3 onClick={() => onRouteChange('about')}  className='moji ma3 mv4-ns'>All For One</h3></div>
            {/*<div className="ml4 ml7-ns">*/}
            {/*</div>*/}
            {/*<div className="ml7-ns">*/}
            {/*</div>*/}
            <div style={{}} className="push ma2">
                <button onClick={() => onRouteChange('form')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>シェア</button>
                <button onClick={() => onRouteChange('/')} className='fl dim btnS b tc ma2 ma3-ns ph3-ns pv2-ns ph2 pv1 white bg-dark grow br-pill pointer f6'>ホーム</button>
            </div>

        </nav>
    );
}

export default Navigation;