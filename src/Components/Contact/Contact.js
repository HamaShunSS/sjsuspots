import React from 'react';
import {Link} from "react-router-dom";

const Contact = ({ onRouteChange }) => {
    return (
        <nav style={{color: 'white', display: 'flex'}} className='w-100 w-100-ns bg-black-20 tc mt7-ns mt7 pt4-ns pb5-ns'>
            <div className="ph4-ns pa2 mh2-ns mb3-ns">
                <h3　onClick={() => onRouteChange('about')} className="moji b f3-ns mv3-ns f4">Recotto</h3>
                <p className="f5-ns f7 mv2 mv4-ns">~Discover authentic infomation~</p>
                <Link to="/about" className="btnS tc dim b ma1 ma3-ns ph2-ns pv1-ns ph2 pv1 white bg-black-10 br-pill pointer f7 mv4-ns">About</Link>
            </div>
            <div className="push pa2 tc mr2 mr7-ns mb3-ns">
                <p className="b f4-ns f6 pv1 pt1-ns mv3-ns">Support</p>
                <p className="f5-ns f7 mv2 mv4-ns">recotto.afo@gmail.com</p>
                <Link to="/signin" className="btnS tc dim b ma1 ma3-ns ph2-ns pv1-ns ph2 pv1 white bg-black-10 br-pill pointer f7 mv4-ns">Officers Page</Link>
                {/*<button onClick={() => onRouteChange('signin')} className="btnS tc dim b ma1 ma3-ns ph2-ns pv1-ns ph2 pv1 white bg-black-10 br-pill pointer f7">Officers Page</button>*/}
            </div>
        </nav>
    );
}

export default Contact;