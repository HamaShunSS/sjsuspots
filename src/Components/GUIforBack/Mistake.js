import React from 'react';
import {Link} from "react-router-dom";

const Mistake = ({ routeCheck }) => {
    return (
        <div className="mb5 mb6-ns">
            <label className="db mv6 fw6 lh-copy f1 mb3 mt7-ns ph4" htmlFor="name">Wrong email or password</label>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/userLogIn" onClick={() => routeCheck('')}>Back to Login Page</Link></button>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/" onClick={() => routeCheck('')}>home</Link></button>

            {/*<p onClick={() => onRouteChange('userLogIn')} className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>Back to Login Page</p>*/}
            {/*<p onClick={() => onRouteChange('signin')} className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>Officer Login Page</p>*/}
            {/*<p onClick={() => onRouteChange('/')} className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>Home</p>*/}
        </div>
    );
}


export default Mistake;