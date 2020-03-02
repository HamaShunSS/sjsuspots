import React from 'react';

const santaClara = 'Santa Clara County'

const SantaClaraCountyList = ({showSantaClara, onId, loadLonLat}) => {
    if (showSantaClara.length > 0) {
        return (
            <div className='shadow-5 br1 bw2 bg-white-80' onClick={()=>{onId(santaClara); loadLonLat(37.3337, -121.8907)}}>
            <div className="black tc ">
                <div className="pa1 tl">
                    <h4 >{santaClara}</h4>
                </div>
            </div>
        </div>
        )
    }
    return(null )
}


export default SantaClaraCountyList;