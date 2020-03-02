import React from 'react';

const Thankyou = ({ onRouteChange, region }) => {
    if (region === '') {
        return (
            <div className="pv4 mb6-ns">
                <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">Thank you very much for sharing!!</label>
                <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Continue to share</button>
                <button onClick={() => onRouteChange('/')}
                        className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back
                    to home</button>
            </div>
        )
    } else {
        return (
            <div className="pv4 mb6-ns">
                <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">Thank you very much for sharing!!</label>
                <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Continue to share</button>
                <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back to home</button>
            </div>
        )
    }
}


export default Thankyou;