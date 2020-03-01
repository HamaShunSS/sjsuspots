import React from 'react';

const Sorry = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns mh3">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns " htmlFor="name">Something went wrong...</label>
            <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Continue to share</button>
            <button onClick={() => onRouteChange('/')} className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>Back to home</button>
        </div>
    );
}


export default Sorry;