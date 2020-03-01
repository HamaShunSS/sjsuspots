import React from 'react';

const AreaList = ({areas, onCity}) => {
    // const  = infos.sort(
    //     function compareFunc(a,b){
    //         return (a < b);
    //     }
    // );
    // const asample = areas.forEach(function(value,) {
    //     console.log( value[i] )
    //     return ( value[i] )
    // })

    const ab = () => {
        for (let i = 0; i < areas.length; i++) {
            return areas[i]
        }
    }
    // console.log(area)
    return(
        <div>

                                        {
                                            areas.map((area) => {
                                                // console.log(area)
                                                return (
                                                    <div className='ma2-ns grow-ns shadow-5 br1 bw2 bg-white-80' onClick={() =>{onCity(area)}}>
                                                        <div className="black tc ">

                                                            <div className="pa1 tl">
                                                                <h4 >{area}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }



        </div>


    );
}

export default AreaList;