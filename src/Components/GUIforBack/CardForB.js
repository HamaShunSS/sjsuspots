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
                      onSubmitFormBackCategory,
                      onCommentsChange,
                      onCommentsChangeB,
                      onDeleteInfo,
                      onSubmitFormBackUserName,
                      onSubmitFormBackCountry,
                      onSubmitFormBackEnglish,
                      onSubmitFormBackDate,
                      status,
                      email
} ) => {
    console.log('info is ',info);
    if (status === 'mas') {
        return(
            <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2'>
                <div className="black tc">
                    <div className="tc " >
                        <img id='inputimage' alt='画像' src={info.url}
                             style={{ }}
                             className="shashin fl" />
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackPrice(info.id);}} > 値段変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">カテゴリー</label>
                        <p className="f7">{info.category}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="text"
                            name="comments"
                            id="comments"
                            placeholder= 'category'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackCategory(info.id);}} > カテゴリー変更</button>

                        <label className="db fw6 lh-copy f7" htmlFor="name">User Name</label>
                        <p className="f7">{info.username}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="text"
                            name="username"
                            id="username"
                            placeholder= 'User Name'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackUserName(info.id);}} > User Name変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Country</label>
                        <p className="f7">{info.country}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="text"
                            name="country"
                            id="country"
                            placeholder= 'Country'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackCountry(info.id);}} > Country変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Date</label>
                        <p className="f7">{info.date}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="date"
                            name="date"
                            id="date"
                            placeholder= 'Date'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackDate(info.id);}} > Date変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">English Comments</label>
                        <p className="f7">{info.english}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="english"
                            name="english"
                            id="english"
                            placeholder= 'English'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackEnglish(info.id);}} > English Comments変更</button>

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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackComments(info.id);}} > コメント変更</button>
                        <div className="pv2">
                            <p className="">
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmit(info.id);}} >良かった {info.iine}</button>
                                {' '}
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                            <p className="">
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitD(info.id);}} >良かった！減らす {info.iine}</button>
                                {' '}
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitWD(info.id);}} >ビミョー減らす {info.waruiine}</button></p>
                        </div>
                        <div>
                            <label className="db fw6 lh-copy f7" htmlFor="name">データを消す</label>
                            <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                    onClick={() => {onDeleteInfo(info.id);}} >データ消去</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2'>
                <div className="black tc">
                    <div className="tc " >
                        <img id='inputimage' alt='画像' src={info.url}
                             style={{ }}
                             className="shashin fl" />
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackPrice(info.id);}} > 値段変更</button>
                        <label className="db fw6 lh-copy f7" htmlFor="name">カテゴリー</label>
                        <p className="f7">{info.category}</p>
                        <input
                            className="pa1 input-reset bg-white hover-bg-black hover-white br2 f7 w-100"
                            type="text"
                            name="comments"
                            id="comments"
                            placeholder= 'category'
                            onChange={onCommentsChangeB}
                        />
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackCategory(info.id);}} > カテゴリー変更</button>
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
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onSubmitFormBackComments(info.id);}} > コメント変更</button>
                        <div className="pv2">
                            <p className="">
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmit(info.id);}} >良かった {info.iine}</button>
                                {' '}
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitW(info.id);}} >ビミョー {info.waruiine}</button></p>
                            <p className="">
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitD(info.id);}} >良かった！減らす {info.iine}</button>
                                {' '}
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {onButtonSubmitWD(info.id);}} >ビミョー減らす {info.waruiine}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardForB;