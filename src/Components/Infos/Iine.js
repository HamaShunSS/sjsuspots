import React from 'react';

const Iine = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">”良かった”　頂きました！ありがとうございます！！</label>
            <p onClick={() => onRouteChange('category')} className='b link dim pa3 grow f4 pointer'>カテゴリーに戻る</p>
            <p onClick={() => onRouteChange('home')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
        </div>
    );
}


export default Iine;