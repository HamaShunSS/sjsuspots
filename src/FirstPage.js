import React from 'react';


const FirstPage = ({ onRouteChange, loadCategory, loadRegion }) => {
    return(
        <div>
            <div>
                <div className='tc pv5'>
                    <h1 className='pt6'>リコット</h1>
                    <label className="fl w-100 w-100-ns tc db pv2 fw6 lh-copy f">~隠れスポットやおすすめスポットを紹介~</label>
                </div>
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('category'); loadRegion('San Jose');}}
                            className='f3 link pa3 dim pointer'>San Jose</h2>
                    </div>
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('category'); loadRegion('San Francisco');}}
                            className='f3 link pa3 dim pointer'>San Francisco</h2>
                    </div>
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('category'); loadRegion('Monterey');}}
                            className='f3 link pa3 dim pointer'>Monterey</h2>
                    </div>
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('category'); loadRegion('Santa Cruz');}}
                            className='f3 link pa3 dim pointer'>Santa Cruz</h2>
                    </div>
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('category'); loadRegion('Berkeley');}}
                            className='f3 link pa3 dim pointer'>Berkeley</h2>
                    </div>
            </div>
        </div>
    );
}

export default FirstPage;