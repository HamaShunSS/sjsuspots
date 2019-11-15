import React from 'react';

const ThankyouB = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">変更して頂きありがとうございます！！</label>
            <p onClick={() => onRouteChange('back')} className='b link dim pa3 grow f4 pointer'>変更を続ける</p>
            <p onClick={() => onRouteChange('/')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
        </div>
    );
}


export default ThankyouB;