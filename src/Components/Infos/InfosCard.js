import React from 'react';




const Card = ({ info } ) => {
    console.log('url is ', info.url );
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 w5-ns'>
            <div className="black tc">
                <h2>{info.name}</h2>
                <div className="ph2 tc">
                    <img id='inputimage' alt='画像' src={info.url} className=" pv2 w5 h4 h4-ns w5-ns" />
                </div>
                        <p className="">{info.location}</p>
                    <p className="">
                        <h4l> {info.price}</h4l></p>
                    <p className="">
                        <h4> {info.comments}</h4></p>
            </div>
        </div>
    );
}

export default Card;