import React from 'react';




const Card = ({ info, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange} ) => {
    console.log('info is ',info);
    return(
        <div className='tc bg-light-green dib br3 ma3 bw2 grow shadow-5 w5-ns br2'>
            <div className="black tc">
                <div className="tc" >
                    <img id='inputimage' alt='画像' src={info.url}
                         style={{ }}
                     className="h4 br--top" />
                </div>
                <div className="pa3 tl">
                <h4>{info.name}</h4>
                        <p className="f7">{info.location}</p>
                    <p className="f7">
                        <p> {info.price}</p></p>
                    <p className="f7">
                        <p> {info.comments}</p></p>
                    <p className="">
                        <button className="b ph2 pv1 input-reset bg-green btn-outline-green white br2 grow pointer f7"
                        onClick={() => {onButtonSubmit(info.id);}} >良かった！ {info.iine}</button>
                        {' '}
                        <button className="b ph2 pv1 input-reset bg-green btn-outline-green white br2 grow pointer f7"
                                onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                    <input
                        className="ph2 pv1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100 w-50-ns"
                        type="text"
                        name="comments"
                        id="comments"
                        placeholder= 'Add a comment...'
                        onChange={onCommentsChange}
                    />
                    <button className="b ph2 pv1 input-reset btn-outline-green bg-green white br2 grow pointer f7"
                            onClick={() => {onSubmitForm(info.id, info.comments);}} > コメント追加</button>
                </div>
            </div>
        </div>
    );
}

export default Card;