import React from 'react';




const CardForB = ({ info,
                      onButtonSubmit,
                      onButtonSubmitW,
                      onButtonSubmitD,
                      onButtonSubmitWD,
                      onSubmitFormBackComments,
                      onSubmitFormBackURL,
                      onSubmitFormBackName,
                      onSubmitFormBackLocation,
                      onSubmitFormBackPrice,
                      onCommentsChange,
                      onCommentsChangeB
} ) => {
    console.log('info is ',info);
    return(
        <div className='tc bg-light-green dib br3 ma3 bw2 grow shadow-5 w5-ns'>
            <div className="black">
                <div className="tc " >
                    <img id='inputimage' alt='画像' src={info.url}
                         style={{ }}
                         className="h4 br--top" />
                </div>
                <div className="pa1 tl">
                    <input
                        className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100 w-50"
                        type="text"
                        name="comments"
                        placeholder= 'ex) https://abcd/efgh.jpg'
                        id="comments"
                        onChange={onCommentsChangeB}
                    />
                    <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                            onClick={() => {onSubmitFormBackURL(info.id);}} > 画像のURL変更</button>
                </div>
                <div className="pa3 tl">
                    <label className="db fw6 lh-copy f7" htmlFor="name">名前</label>
                    <h4 className='f7'>{info.name}</h4>
                    <input
                        className="pa1 input-reset bg-white hover-bg-black hover-white br2 w-100 f7"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= '場所の名前'
                        onChange={onCommentsChangeB}
                    />
                    <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                            onClick={() => {onSubmitFormBackName(info.id);}} > 名前変更</button>
                    <label className="db fw6 lh-copy f7" htmlFor="name">アドレス</label>
                    <p className="f7">{info.location}</p>
                    <input
                        className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= 'アドレス（住所）'
                        onChange={onCommentsChangeB}
                    />
                    <button className="b pa1 input-reset ba bg-green white br2 grow pointer f7 dib"
                            onClick={() => {onSubmitFormBackLocation(info.id);}} > アドレス変更</button>
                    <p className="">
                        <label className="db fw6 lh-copy f7" htmlFor="name">値段</label>
                        <p className="f7"> {info.price}</p></p>
                    <input
                        className="pa1 input-reset bg-white hover-bg-black hover-white f7 br2 w-100"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= '何もかかない（無料の場合）〜$$$$$'
                        onChange={onCommentsChangeB}
                    />
                    <button className="b pa1 input-reset ba bg-green white br2 grow pointer f7 dib"
                            onClick={() => {onSubmitFormBackPrice(info.id);}} > 値段変更</button>
                    <p className="">
                        <label className="db fw6 lh-copy f7" htmlFor="name">コメント</label>
                        <p className='f7'> {info.comments}</p></p>
                    <input
                        className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= 'コメント変更'
                        onChange={onCommentsChangeB}
                    />
                    <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                            onClick={() => {onSubmitFormBackComments(info.id);}} > コメント変更</button>
                    <div className="pv2">
                        <p className="">
                            <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                                    onClick={() => {onButtonSubmit(info.id);}} >良かった {info.iine}</button>
                            {' '}
                            <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                                    onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                        <p className="">
                            <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                                    onClick={() => {onButtonSubmitD(info.id);}} >良かった！減らす {info.iine}</button>
                            {' '}
                            <button className="b pa1 input-reset bg-green white br2 grow pointer f7 dib"
                                    onClick={() => {onButtonSubmitWD(info.id);}} >ビミョー減らす {info.waruiine}</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardForB;