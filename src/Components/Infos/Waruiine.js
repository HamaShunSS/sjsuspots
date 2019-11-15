import React from 'react';

const Waruiine = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">素直な評価ありがとうございます！！</label>
            <p onClick={() => onRouteChange('/')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
            <p onClick={() => onRouteChange('form')} className='b link dim pa3 grow f4 pointer'>シェアをしてみる</p>
        </div>
    );
}


export default Waruiine;