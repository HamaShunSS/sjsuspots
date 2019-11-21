import React from 'react';


const copyToClipboard =(loc)=> {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById(loc);
    // コピー対象のテキストを選択する
    copyTarget.select();
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    alert("アドレスコピー完了");
}

const Card = ({ info, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange} ) => {
    console.log('info is ',info);
    return(
        <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2'>
            <div className="black tc ">
                <div className="tc" >
                    <img id='inputimage' alt='画像' src={info.url}
                         style={{ }}
                     className="shashin fl"  />
                </div>
                <div className="pa3 tl">
                <h4>{info.name}</h4>
                        <input id={info.location} type='text' size='35' className="fl w-100 f6" value={info.location} onfocus="this.select();" readOnly/>
                        <button className="btnBa b ph1 pv1 white br2 pointer f7" onClick={()=>{copyToClipboard(info.location)}}>Address Copy</button>
                    <p className="f7">
                        <p> {info.price}</p></p>
                    <p className="f7">
                        <p> {info.comments}</p></p>
                    <p className="">
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                        onClick={() => {onButtonSubmit(info.id);}} >良かった！ {info.iine}</button>
                        {' '}
                        <button type="button" className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                    <input
                        className="ph2 pv1 input-reset bg-white hover-bg-white hover-black br2 f7 w-100 w-50-ns"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= 'Add a comment...'
                        onChange={onCommentsChange}
                    />
                    <button className="btnBa b ph2 pv1 input-reset white br1 grow pointer f7"
                            onClick={() => {onSubmitForm(info.id, info.comments);}} > コメント追加</button>
                </div>
            </div>
        </div>
    );
}

export default Card;