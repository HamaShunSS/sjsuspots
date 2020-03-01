import React from 'react';

const BusinessesList = ({businesses, onId, callSpinner, onBizIdCall}) => {
    // const ex = businesses.sort(
    //     function (res){
    //
    //             if (res === businesses.id){
    //                 return ( businesses)
    //             }
    //     }
    // );
    // const asample = areas.forEach(function(value,) {
    //     console.log( value[i] )
    //     return ( value[i] )
    // })

    // const ab = () => {
    //     for (let i = 0; i < areas.length; i++) {
    //         return businesses[i]
    //     }
    // }
    // console.log(area)
    return(
        <div>
            {
                businesses.map((biz) => {
                    // console.log(area)
                    return (
                        <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2' onClick={() =>{onId(biz.id); onBizIdCall(biz.id)}}>
                            <div className="black tc ">
                                <img id='inputimage' alt='No image' src={biz.image_url}
                                     style={{ }}
                                     className="shashin fl"  />
                                <div className="pa1 tl">
                                    <h4 >{biz.name}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })
            }



        </div>


    );
}

export default BusinessesList;