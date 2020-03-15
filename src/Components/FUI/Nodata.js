import React from 'react';
import {Link} from "react-router-dom";

const NoData = ({ routeCheck }) => {
    return (
        <div className="pv4 mb6-ns">
            <label className="db pv6 fw6 lh-copy f1 mt5 mt7-ns ph4" htmlFor="name">There is no data around the location yet...</label>
            <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                <Link to="/" style={{color: 'white'}} onClick={() => routeCheck('')}>Back to home</Link></button>
        </div>
    );
}


export default NoData;