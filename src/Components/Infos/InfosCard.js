import React from 'react';




const Card = ({ info } ) => {
    console.log('url is ', info.url );
    return(
        <div className='tc bg-light-green dib br3 pa4 ma3 grow bw2 shadow-5'>
            <div className="black">
                <h2>{info.name}</h2>
                <img id='inputimage' alt='画像' src={info.url} className="pv3 fl w-100 w-100-ns tc" />
                <p className="">住所：{info.location}</p>
                <p>星：{info.rate}</p>
                <p>コメント：{info.comments}</p>
            </div>
        </div>
    );
}

export default Card;