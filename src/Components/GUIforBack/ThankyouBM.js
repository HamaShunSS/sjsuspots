import React from 'react';
import {Link} from "react-router-dom";

const ThankyouBM = ({ routeCheck }) => {
    return (
        <div className="pv2 mb4-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">The Change Completed</label>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/backMaster" onClick={() => routeCheck('')}>Go back to the master page</Link></button>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/" onClick={() => routeCheck('')}>Log out</Link></button>

            {/*<button onClick={() => onRouteChange('backMaster')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Go back to the master page</button>*/}
            {/*<button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Log out</button>*/}
        </div>
    );
}


export default ThankyouBM;