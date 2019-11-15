import React from 'react';

const NoData = ({ onRouteChange }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">まだデータが無いみたいです、、是非シェアハピお願いします！！</label>
            <p onClick={() => onRouteChange('form')} className='b link dim pa3 grow f4 pointer'>シェアする</p>
            <p onClick={() => onRouteChange('category')} className='b link dim pa3 grow f4 pointer'>カテゴリーに戻る</p>
        </div>
    );
}


export default NoData;