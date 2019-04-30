import React from 'react';




const Card = ({ info } ) => {
    console.log('url is ', info.url );
    return(
        <div className='tc bg-light-green dib br3 pa4 ma3 grow bw2 shadow-5 w5-ns'>
            <div className="black">
                <h2>{info.name}</h2>
                <p></p>
                <div>
                <img id='inputimage' alt='画像' src={info.url} className="pv3 fl w5 h4 h4-ns w5-ns tc" />
                </div>
                <p></p>
                <div>
                <p className="">住所：
                    <label className=""> {info.location}</label></p>
                </div>
                <p className=" ">値段：
                    <label> {info.price}</label></p>
                <p className=" ">
                    <label> {info.comments}</label></p>
            </div>
        </div>
    );
}

export default Card;