import React from 'react';

const Iine = ({ onRouteChange, region }) => {
    if (region === '') {
        return (
            <div className="pv4 mb6-ns">
                <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">Thank you very much for sharing your experience!!</label>
                <button onClick={() => onRouteChange('/')}
                        className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back
                    to home</button>
                <button onClick={() => onRouteChange('form')}
                        className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Share my recommendation
                </button>
            </div>
        )
    } else {
        return (
            <div className="pv4 mb6-ns">
                <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">Thank you very much for sharing your honest experience!!</label>
                <button onClick={() => onRouteChange('sui')}
                        className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back
                    to {region}</button>
                <button onClick={() => onRouteChange('form')}
                        className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Share my recommendation
                </button>
            </div>
        )
    }
}


export default Iine;