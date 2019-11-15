import React from 'react';

const Sorry = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns " htmlFor="name">記入漏れがあるようです...</label>
            <p onClick={() => onRouteChange('form')} className='b link dim pa3 grow f4 pointer'>シェアハピに戻る</p>
            <p onClick={() => onRouteChange('/')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
        </div>
    );
}


export default Sorry;