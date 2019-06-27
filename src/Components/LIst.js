import React from 'react';


const List = ({ onRouteChange, loadCategory }) => {
    return(
        <div>
            <div>
                <div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('ramen');}}
                            className='f3 link pa3 dim pointer'>ラーメン</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('food');}}
                            className='f3 link pa3 dim pointer'>食事処</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('view');}}
                            className='f3 link pa3 dim pointer'>景色</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('cafe');}}
                            className='f3 link pa3 dim pointer'>カフェ</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('hobby');}}
                            className='f3 link pa3 dim pointer'>娯楽</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('club');}}
                            className='f3 link pa3 dim pointer'>クラブ</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w4 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('bar');}}
                            className='f3 link dim pa3 pointer'>バー</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('study');}}
                            className='f3 link dim pa3 pointer'>勉強する場所</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('nature');}}
                            className='f3 link dim pa3 pointer'>自然</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('shopping');}}
                            className='f3 link dim pa3 pointer'>買い物</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('beauty');}}
                            className='f3 link dim pa3 pointer'>美容系</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('kankou');}}
                            className='f3 link dim pa3 pointer'>観光</h2>
                    </div>
                    <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5 w5 w5-ns'>
                        <h2 onClick={() => {onRouteChange('infos'); loadCategory('others');}}
                            className='f3 link dim pa3 pointer'>その他</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;