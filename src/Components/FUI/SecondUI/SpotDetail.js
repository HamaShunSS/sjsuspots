import React from 'react';

const FontAwesome = require('react-fontawesome');

const copyToClipboard =(loc)=> {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById(loc);
    // コピー対象のテキストを選択する
    copyTarget.select();
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    alert("Address Copied");
}


const showNumber = (array) => {
    const arrayed = array.split(',')
    const arrayedReal = arrayed.map(str => parseInt(str, 10));
    return ((arrayedReal.length - 1))
}
const string = ''
const Detail = ({ info, userid, changeAuthentic, changeNotAuthentic, changeGood, changeBad, authentic, onAddComment, onAddBadComment, tobad, onCommentsChange, toCommentBad, onRouteChange, usercountry } ) => {
    const arrayedComment = info.comment.split('||');
    const arrayedBadComment = info.badcomment.split('||');

    const commetArray = arrayedComment.map((comment) => {
        const num = comment.split('|')
        return (num);
    })

    const badArray = arrayedBadComment.map((comment) => {
        const num = comment.split('|')
        return (num);
    })

    return(
        <div className=''>
            <div className="black tc bg-white-60">
                <div className="tc w-100 w-100-ns" >
                    <img id='inputimage' alt='No image' src={info.photo1}
                         style={{ }}
                         className="w-100 w-100-ns h-100 h-100-ns fl shashin"  />
                    <img id='inputimage' alt='No image' src={info.photo2}
                         style={{ }}
                         className=" fl shashinHambun"  />
                    <img id='inputimage' alt='No image' src={info.photo3}
                         style={{ }}
                         className=" fl shashinHambun"  />
                </div>
                <div className="pa3 tl">
                    <div>
                        <h2>{info.name}</h2>
                    </div>
                    <div className='pb2'>
                        <p className="">
                            {/*<input*/}
                            {/*onClick={changeAuthentic}*/}
                            {/*className='b pa2-ns pv1 input-reset br2 w-20 w-10-ns clickbtnSS pointer f6'*/}
                            {/*type="submit"*/}
                            {/*value="Authentic"*/}
                            {/*/>*/}
                            <label className="f6 mr1">Authentic taste?  </label>
                            {/*not login*/}
                            {
                                userid === '' &&
                                <button className="btnBa b ph2 pv1  white br2 pointer f7"
                                        onClick={() => {alert("Please log in first"); onRouteChange('userLogIn')}} >
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-up'
                                        size='1x'
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    /> {showNumber(info.authentic)}</button>
                            }
                            {/*authentic user*/}
                            {
                                userid !== '' && usercountry === info.country &&
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {
                                            changeAuthentic(info.id, info.authentic)
                                        }}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-up'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                    /> {showNumber(info.authentic)}</button>
                            }
                            {/*Not authentic user*/}
                            {
                                userid !== '' && usercountry !== info.country &&
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {
                                            alert('You may tap for your country food')
                                        }}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-up'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                    /> {showNumber(info.authentic)}</button>
                            }
                            {' '}
                            {/*/!*not login*!/*/}
                            {/*{*/}
                            {/*userid === '' &&*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7"*/}
                            {/*onClick={() => {alert("Please log in first"); onRouteChange('userLogIn')}} >*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-down'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.notauthentic)}</button>*/}
                            {/*}*/}
                            {/*/!*Authentic user*!/*/}
                            {/*{*/}
                            {/*userid !== '' && usercountry === info.country &&*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7"*/}
                            {/*onClick={() => {*/}
                            {/*changeNotAuthentic(info.id, info.notauthentic)*/}
                            {/*}}>*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-down'*/}
                            {/*size='1x'*/}
                            {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}*/}
                            {/*/> {showNumber(info.notauthentic)}</button>*/}
                            {/*}*/}
                            {/*/!*Not authentic user*!/*/}
                            {/*{*/}
                            {/*userid !== '' && usercountry !== info.country &&*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7"*/}
                            {/*onClick={() => {*/}
                            {/*alert('You may tap for your country food')*/}
                            {/*}}>*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-down'*/}
                            {/*size='1x'*/}
                            {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}*/}
                            {/*/> {showNumber(info.notauthentic)}</button>*/}
                            {/*}*/}
                            {/*{' '}*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*<label className='f7'>Recommended? </label>*/}
                            {/*{*/}
                            {/*userid === '' &&*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7"*/}
                            {/*onClick={() => {alert("Please log in first"); onRouteChange('userLogIn')}} >*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-up'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.good)}</button>*/}
                            {/*}*/}
                            {/*{*/}
                            {/*userid !== '' &&*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7"*/}
                            {/*onClick={() => {*/}
                            {/*changeGood(info.id, info.good);*/}
                            {/*}}>*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-up'*/}
                            {/*size='1x'*/}
                            {/*style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}*/}
                            {/*/> {showNumber(info.good)}</button>*/}
                            {/*}*/}
                            {/*{' '}*/}
                            {/*bad*/}
                            {
                                userid === '' &&
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {alert("Please log in first"); onRouteChange('userLogIn')}} >
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-down'
                                        size='1x'
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    /> {showNumber(info.bad)}</button>
                            }
                            {
                                userid !== '' &&
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {
                                            toCommentBad('yes');
                                        }}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-down'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                    /> {showNumber(info.bad)}
                                </button>
                            }
                            {
                                tobad === 'yes' &&
                                <div className='mt2'>
                                    <label className='f7'>Tell us the reason</label>
                                    <input
                                        className="ph2 pv1 input-reset bg-white hover-bg-white hover-black br2 f7 w-100 w-50-ns"
                                        type="text"
                                        name="comments"
                                        id="comments"
                                        placeholder= 'Tell us the reason...'
                                        onChange={onCommentsChange}
                                    />
                                    <button className="btnBa b ph2 pv1 input-reset white br1 grow pointer f7"
                                            onClick={() => {
                                                onAddBadComment(info.id, info.badcomment); //badcomment 追加
                                                changeBad(info.id, info.bad)　//bad 追加
                                            }} > Add a comment</button>
                                </div>
                            }
                            {' '}
                        </p>
                    </div>
                    <div className='w-100'>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='map-marker'
                            size='1x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />{' '}
                        <input id={info.location} type='text' size='37' className=" f6" value={info.location} onfocus="this.select();" readOnly/>
                        <button className="btnBa b ph1 pv1 white br2 pointer f7" onClick={()=>{copyToClipboard(info.location)}}>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='copy'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />{' '}Copy</button>
                    </div>
                    <div className='w-100'>
                        <a className="btnBa b ph1 pv1 white br2 pointer f7 mr3" href={info.url}>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='globe'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />{' '}Website</a>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='phone'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />{' '}
                        <label className="mr3">{info.phone}</label>
                        <label className="">{info.price}</label>
                    </div>

                    <p className="f7 mt3">{
                        commetArray.map((comment) => {
                            console.log(comment)
                            return (
                                <div className=''>
                                    <p className="mb2">
                                        <FontAwesome
                                            className='super-crazy-colors'
                                            name='user-circle'
                                            size='1x'
                                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                        />{' '} {comment[2]}{' '}
                                        from{' '} {comment[3]}
                                    </p>
                                    <p className="mb2 bb">{comment[0]}</p>
                                </div>
                            )

                        })
                    }</p>
                    <p className="f7 ">{
                        badArray.map((comment) => {
                            console.log(comment)
                            if (info.badcomment === ''){

                            } else {
                                return (
                                    <div className=''>
                                        <p className="mb2">
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='user-circle'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            />{' '} {comment[2]}{' '}
                                            from{' '} {comment[3]}
                                        </p>
                                        <p className="mb2 bb">{comment[0]}</p>
                                    </div>
                                )
                            }
                        })
                    }</p>
                    {
                        userid === '' &&
                        <button className="btnBa b ph2 pv1 input-reset white br1 grow pointer f7"
                                onClick={() => {alert("Please log in first"); onRouteChange('userLogIn')}} > Add a comment</button>
                    }
                    {
                        userid !== '' &&
                        <div>
                            <input
                                className="ph2 pv1 input-reset bg-white hover-bg-white hover-black br2 f7 w-100 w-50-ns"
                                type="text"
                                name="comments"
                                id="comments"
                                placeholder= 'Add a comment...'
                                onChange={onCommentsChange}
                            />
                            <button className="btnBa b ph2 pv1 input-reset white br1 grow pointer f7"
                                    onClick={() => {onAddComment(info.id, info.comment);}} > Add a comment</button>
                        </div>
                    }
                    <div className="ml2 ml7-ns"> </div>
                    <div style={{}} className="push ma2 mb2 f7 mt3">
                        Food of{' '}
                        <label className='f7'>{info.country}</label>{' '}
                        shared by{' '}<FontAwesome
                        className='super-crazy-colors'
                        name='user-circle'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <label className=''>{' '}{info.by} from {info.usercountry}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;