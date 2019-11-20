import React from 'react';

const Contact = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='fl w-100 w-100-ns tc bg-dark-gray mt7-ns { background-color: #333333 }'>
            <div className="ph4-ns pa2">
                <h3 className="moji b f3-ns f4">All For One</h3>
                <p className="f5-ns f7">リコット</p>
                <p className="f5-ns f7">オススメのスポットを紹介</p>
            </div>
            <div className="push pa2 tc">
                <p className="b f3-ns f6">質問・連絡先</p>
                <p className="f5-ns f7">Email: recotto.afo@gmail.com</p>
                <p className="f5-ns f7">Location: 1 Washington Sq, San Jose, CA 95192</p>
                <p onClick={() => onRouteChange('signin')} className="tc dim btnS b ma1 ma3-ns ba b--white ph2-ns pv1-ns ph2 pv1 white bg-dark br-pill grow pointer f7">Officers Page</p>
            </div>
        </nav>
    );
}

export default Contact;