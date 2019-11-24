import React from 'react';

const About = ({ onRouteChange }) => {
    return (
        <div className="ma3-ns ma2">
            <label className="db b pv3 lh-copy f3 mt4 mt5-ns ph4" htmlFor="name">リコット</label>
            <p className="h3-ns h6 mv4">
                リコットはオススメスポットや隠れスポットなどの知識や経験を集約し蓄積しているWebサービスです。
                シェアするのは現地の日本人なので情報の正確性は負けません。せっかくのみなさんの貴重な経験を次の世代やまだ知らない人たちへ一緒に届けていきましょう！
            </p>
            <div>
                <p className='b f3 mt4 mb2'>使い方</p>
                <div className="tl fl ma2 mh7-ns">
                    <label className='b mh4-ns'>1. エリアから選択して、、</label>
                    <img id='inputimage' alt='画像無し' src='https://mail.google.com/mail/u/0?ui=2&ik=f40ff6b2d4&attid=0.1&permmsgid=msg-a:r256478501703753568&th=16e9cafba5608a22&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ94QS-b1Hcbw008ncxTBTtXBUkbDP1_V_LmWt-LzY335e0cxpw9Z8J36PF6MCnd2-4hSK6gmUayMC5cxIItv5jTUH2_0l98BbI-B6q46zggBSXTDpRM3vVzM5E&disp=emb&realattid=16e9caf9f157e15f7211'
                         style={{ }}
                         className="h6 w5 fl"  />
                </div>
                <div className="tl fl ma2 mh7-ns">
                    <label className='b mh4-ns'>2. カテゴリーから選択してみよう！</label>
                    <img id='inputimage' alt='画像無し' src='https://mail.google.com/mail/u/0?ui=2&ik=f40ff6b2d4&attid=0.2&permmsgid=msg-a:r256478501703753568&th=16e9cafba5608a22&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8kziutxHtP9gxZTCIjOY9SQNQknOC3BS4q6xNur1SV0C1s5C0JM3vaKxNPImGdK917j-Gd51GyEE20zR5Qbq_7xNk0YrEMaI4bX37VNkybmrJP_VzhKSYCVdQ&disp=emb&realattid=16e9cafb08946a21f232'
                         style={{ }}
                         className="h6 w5 fl"  />
                </div>
                <div className="tl fl ma2 mh7-ns">
                    <label className='b mh4-ns'>自分の経験をシェアしてみよう！</label>
                    <img id='inputimage' alt='画像無し' src='https://mail.google.com/mail/u/0?ui=2&ik=f40ff6b2d4&attid=0.2&permmsgid=msg-a:r-7536699224137293792&th=16e9cbf23400694f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ--m4rHD8bOuY8aivG5C7W9PIaVeNe4xe-MPsE3hvR2xhPp6HAiWykPEVxvo_JdNOKFsf19plFBj-EuGVztbKYp3x5XhNfg66n7usdWdOtrRO_vb-IVN0B1KcU&disp=emb&realattid=16e9cbf167cd2ca21231'
                         style={{ }}
                         className="h6 w5 fl"  />
                </div>
                <div className='ma7-ns'>
                    <button onClick={() => onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">スポットを探す</button>
                    <button onClick={() => onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">シェアしてみる</button>
                </div>
            </div>
        </div>
    );
}


export default About;