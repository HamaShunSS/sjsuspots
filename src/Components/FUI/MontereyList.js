import React from 'react';

const monterey = 'Monterey County'

const MontereyCountyList = ({showMonterey, onId, loadLonLat}) => {
    if (showMonterey.length > 0) {
        return (
            <div className='shadow-5 br1 bw2 bg-white-80' onClick={()=>{onId(monterey); loadLonLat(36.6002, -121.8947)}}>
                <div className="black tc ">
                    <div className="pa1 tl">
                        <h4 >{monterey}</h4>
                    </div>
                </div>
            </div>
        )
    }
    return(null )
}


export default MontereyCountyList;