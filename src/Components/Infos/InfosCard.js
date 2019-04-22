import React from 'react';




const Card = ({ info } ) => {
    console.log('url is ', info.url );
    return(
        <div className='tc bg-light-green dib br3 pa4 ma3 grow bw2 shadow-5 w5-ns'>
            <div className="black">
                <h2>{info.name}</h2>
                <div>
                <img id='inputimage' alt='画像' src={info.url} className="pv3 fl w5 h4 h4-ns w5-ns tc" />
                </div>
                <div>
                <p className="">住所：{info.location}</p>
                </div>
                <p>星：{info.rate}</p>
                <p>コメント：{info.comments}</p>
            </div>
        </div>
    );
}

export default Card;