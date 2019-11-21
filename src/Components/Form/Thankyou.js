import React from 'react';

const Thankyou = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">シェアして頂きありがとうございます！！</label>
            <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">シェアを続ける</button>
            <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">ホームに戻る</button>
        </div>
    );
}


export default Thankyou;