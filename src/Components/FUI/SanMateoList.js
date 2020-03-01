import React from 'react';

const sanMateo = 'San Mateo County';
const SanMateoCountyList = ({showSanMateo, onId, onLonLat}) => {
    if (showSanMateo.length > 0) {
        return (<div className=' grow-ns shadow-5 br1 bw2 bg-white-80' onClick={()=>{onId(sanMateo); onLonLat(37.4337, -122.4014)}}>
            <div className="black tc ">
                <div className="pa1 tl">
                    <h4 >{sanMateo}</h4>
                </div>
            </div>
        </div>)
    }
    return(null )
}

export default SanMateoCountyList;