import React from 'react';

const sanFrancisco = 'San Francisco County';
const SanFranciscoCountyList = ({showSanFrancisco, onId, onLonLat}) => {
    if (showSanFrancisco.length > 0) {
        return (<div className=' shadow-5 br1 bw2 bg-white-80' onClick={()=>{onId(sanFrancisco); onLonLat(37.7749, -122.4194)}}>
            <div className="black tc ">
                <div className="pa1 tl">
                    <h4 >{sanFrancisco}</h4>
                </div>
            </div>
        </div>)
    }
    return(null )
}

export default SanFranciscoCountyList;