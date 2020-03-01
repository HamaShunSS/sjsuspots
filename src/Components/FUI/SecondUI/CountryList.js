import React from 'react';

const CountryList = ({countries, onCountryChange}) => {
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
        for (let i = 0; i < countries.length; i++) {
            return countries[i]
        }
    }
    // console.log(area)
    return(
        <div>

            {
                countries.map((country) => {
                    // console.log(area)
                    return (
                        <div className='shadow-5 br1 bw2 bg-white-80' onClick={() =>{onCountryChange(country)}}>
                            <div className="black tc ">
                                <div className="pa1 tl">
                                    <li className='' >{country}</li>
                                </div>
                            </div>
                        </div>
                    );
                })
            }



        </div>


    );
}

export default CountryList;