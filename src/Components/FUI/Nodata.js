import React from 'react';

const NoData = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">There is no data around the location yet...</label>
            <p onClick={() => onRouteChange('/')} className='ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer'>Back to Home</p>
        </div>
    );
}


export default NoData;