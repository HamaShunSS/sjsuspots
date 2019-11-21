import React from 'react';

const ThankyouB = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">The Change Completed!!</label>
            <button onClick={() => onRouteChange('back')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Officer pageに戻る</button>
            <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Log out</button>
        </div>
    );
}


export default ThankyouB;