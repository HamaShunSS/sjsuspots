import React from 'react';

const Contact = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-black-20 tc mt7-ns '>
            <div className="ph4-ns pa2 mh2-ns">
                <h3　onClick={() => onRouteChange('about')}  className="moji b f3-ns f4">Recotto</h3>
                <p className="f5-ns f7">~Discover authentic infomation~</p>
                <button onClick={() => onRouteChange('about')} className="btnS tc dim b ma1 ma3-ns ph2-ns pv1-ns ph2 pv1 white bg-black-10 br-pill pointer f7">About</button>
            </div>
            <div className="push pa2 tc mr2 mr7-ns">
                <p className="b f4-ns f6 pv1 pt1-ns">Support</p>
                <p className="f5-ns f7">recotto.afo@gmail.com</p>
                <button onClick={() => onRouteChange('signin')} className="btnS tc dim b ma1 ma3-ns ph2-ns pv1-ns ph2 pv1 white bg-black-10 br-pill pointer f7">Officers Page</button>
            </div>
        </nav>
    );
}

export default Contact;