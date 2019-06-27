import React from 'react';




const Card = ({ info, onButtonSubmit, onButtonSubmitW, onSubmitForm, onCommentsChange} ) => {
    console.log('info is ',info);
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 bw2 grow shadow-5 w5-ns'>
            <div className="black tc">
                <h2>{info.name}</h2>
                <div className="ph2 tc" >
                    <img id='inputimage' alt='画像' src={info.url}
                         style={{ }}
                     className=" pv2 w5 h4 h4-ns w5-ns " />
                </div>
                        <p className="">{info.location}</p>
                    <p className="">
                        <h4> {info.price}</h4></p>
                    <p className="">
                        <h4> {info.comments}</h4></p>
                    <p className="">
                        <button className="b ph2 pv2 input-reset ba bg-green white br2 grow pointer f6 dib"
                        onClick={() => {onButtonSubmit(info.id);}} >良かった！ {info.iine}</button>
                        {' '}
                        <button className="b ph2 pv2 input-reset ba bg-green white br2 grow pointer f6 dib"
                                onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                {/*<div className="pv4">*/}
                    {/*<label className="db fw6 lh-copy f6" htmlFor="name">コメント</label>*/}
                    {/*<input*/}
                        {/*className="pa2 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"*/}
                        {/*type="text"*/}
                        {/*name="comments"*/}
                        {/*id="comments"*/}
                        {/*onChange={onCommentsChange}*/}
                    {/*/>*/}
                    {/*<button className="b ph2 pv2 input-reset ba bg-green white br-pill grow pointer f6 dib"*/}
                            {/*onClick={() => {onSubmitForm(info.id);}} > シェア</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Card;