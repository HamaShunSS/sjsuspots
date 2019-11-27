import React from 'react';

const About = ({ onRouteChange }) => {
    return (
        <div className="ma3-ns ma2">
            <label className="db b pv3 lh-copy f3 mt4 mt5-ns ph4" htmlFor="name">リコット</label>
            <p className="h3-ns h6 mv4">
                リコットは皆さんのオススメの場所や隠れスポットを蓄積していくWebサービスです。
                シェアするのは現地の日本人留学生なので情報の質は確かです。より良いアメリカ生活を送って頂く為に、
                みなさんの今まで培って来た知識、経験を次の世代やまだ知らない人たちへ還元し、一緒にリコットを創っていきましょう！
            </p>
            <div>
                <p className='b f3 mt4 mb2'>使い方</p>
                    <p className='b mv4-ns'>1. エリアから選択して、、</p>
                    <p className='b mv4-ns'>2. カテゴリーから選択してみよう！</p>
                    <p className='b mv4-ns'>自分の経験をシェアしてみよう！</p>
                <div className='ma7-ns'>
                    <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">スポットを探す</button>
                    <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">シェアしてみる</button>
                </div>
            </div>
        </div>
    );
}


export default About;