import React from 'react';

const Thankyou = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns " htmlFor="name">シェアして頂きありがとうございます！！</label>
            <p onClick={() => onRouteChange('form')} className='b link dim pa3 grow f4 pointer'>シェアハピを続ける</p>
            <p onClick={() => onRouteChange('home')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
        </div>
    );
}


export default Thankyou;