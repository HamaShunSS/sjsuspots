import React from 'react';




const Card = ({ info, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange} ) => {
    console.log('info is ',info);
    return(
        <div className='tc bg-white-60 dib ma2-ns ma2 bw2 grow-ns shadow-5 w5-ns br2'>
            <div className="black tc ">
                <div className="tc" >
                    <img id='inputimage' alt='画像' src={info.url}
                         style={{ }}
                     className="shashin fl h5-ns"  />
                </div>
                <div className="pa3 tl">
                <h4>{info.name}</h4>
                        <p className="f7">{info.location}</p>
                    <p className="f7">
                        <p> {info.price}</p></p>
                    <p className="f7">
                        <p> {info.comments}</p></p>
                    <p className="">
                        <button className="btnSS b ph2 pv1 white br2 pointer f7"
                        onClick={() => {onButtonSubmit(info.id);}} >良かった！ {info.iine}</button>
                        {' '}
                        <button type="button" className="btnSS b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                    <input
                        className="ph2 pv1 input-reset bg-white hover-bg-white hover-black br2 f7 w-100 w-50-ns"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= 'Add a comment...'
                        onChange={onCommentsChange}
                    />
                    <button className="btnSS b ph2 pv1 input-reset white br1 grow pointer f7"
                            onClick={() => {onSubmitForm(info.id, info.comments);}} > コメント追加</button>
                </div>
            </div>
        </div>
    );
}

export default Card;