import React from 'react';

const Mistake = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">email か password が間違っています</label>
            <p onClick={() => onRouteChange('userLogIn')} className='b link dim pa3 grow f4 pointer'>Login Pageに戻る</p>
            <p onClick={() => onRouteChange('signin')} className='b link dim pa3 grow f4 pointer'>Officer Login Pageに戻る</p>
            <p onClick={() => onRouteChange('/')} className='b link dim pa3 grow f4 pointer'>ホームに戻る</p>
        </div>
    );
}


export default Mistake;