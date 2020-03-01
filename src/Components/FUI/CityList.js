import React from 'react';

const CityList = ({uniqueCitys, onId}) => {

    return(
        <div>
            {
                uniqueCitys.map((city) => {
                    // console.log(area)
                    return (
                        <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2' onClick={()=>{onId(city)}}>
                            <div className="black tc ">
                                <div className="pa1 tl">
                                    <h4 >{city}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })
            }



        </div>


    );
}

export default CityList;