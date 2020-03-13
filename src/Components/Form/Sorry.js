import React from 'react';
import {Link} from "react-router-dom";

const Sorry = ({ routeCheck }) => {
    return (
        <div className="pv4 mb6-ns mh3">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns " htmlFor="name">Something went wrong...</label>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/form" onClick={() => routeCheck('')}>Continue to share</Link></button>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/" onClick={() => routeCheck('')}>Back to home</Link></button>
        </div>
    );
}


export default Sorry;