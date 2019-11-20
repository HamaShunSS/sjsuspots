import React from 'react';

const ThankyouBM = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">The Change Completed</label>
            <p onClick={() => onRouteChange('backMaster')} className='b link dim pa3 grow f4 pointer'>Go back to the master page</p>
            <p onClick={() => onRouteChange('/')} className='b link dim pa3 grow f4 pointer'>Log out</p>
        </div>
    );
}


export default ThankyouBM;