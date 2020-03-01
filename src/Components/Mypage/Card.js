import React from 'react';

const FontAwesome = require('react-fontawesome');


const showNumber = (array) => {
    const arrayed = array.split(',')
    const arrayedReal = arrayed.map(str => parseInt(str, 10));
    return ((arrayedReal.length - 1))
}


const Card = ({ info,
                  onSubmitFormBackComments,
                  onCommentsChangeB,
                  onDeleteInfo,
                  onSubmitFormBackCountry,
                  onSpotIdChange,
                  status,
                  email
                  } ) => {
    console.log('info is ',info);
    if (status === 'mas') {
        return(
            <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2'
                 onClick={()=>{onSpotIdChange(info)}}>
                <div className="black tc ">
                    <div className="tc" >
                        <img id='inputimage' alt='No image' src={info.photo1}
                             style={{ }}
                             className="shashin fl"  />
                    </div>
                    <div className="pa3 tl">
                        <h4>{info.name}</h4>
                        <p>
                            <label className="f6">Authentic? </label>
                            <button className="btnBa b ph2 pv1 white br2 pointer f7">
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-up'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                /> {showNumber(info.authentic)}</button>
                            {' '}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7">*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-down'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.notauthentic)}</button>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*<label className='f6'>Recommended? </label>*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7">*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-up'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.good)}</button>*/}
                            <button className="btnBa b ph2 pv1 white br2 pointer f7">
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-down'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                /> {showNumber(info.bad)}
                            </button>
                        </p>
                        <div className='w-100'>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='map-marker'
                                size='1x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />{' '}
                            <input id={info.price} type='text' className="w-70 f6" value={info.location}
                                   onfocus="this.select();" readOnly/>
                            <button className="btnBa b ph1 pv1 white br2 pointer f7" >
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='copy'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                />{' '}Copy
                            </button>
                        </div>
                        <div className='w-100'>
                            <a className="btnBa b ph1 pv1 white br2 pointer f7 mr3 mr2-ns" href={info.url}>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='globe'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                />{' '}Web</a>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='phone'
                                size='1x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />{' '}
                            <label className="mr3 mr2-ns">{info.phone}</label>
                            <label className="">{info.price}</label>
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return(
            <div className='tc bg-white-60 dib ma2-ns mh2 mv1 bw2 grow-ns shadow-5 w5-ns br2' onClick={()=>{onSpotIdChange(info)}}>>
                <div className="black tc ">
                    <div className="tc" >
                        <img id='inputimage' alt='No image' src={info.photo1}
                             style={{ }}
                             className="shashin fl"  />
                    </div>
                    <div className="pa3 tl">
                        <h4>{info.name}</h4>
                        <p>
                            <label className="f6">Authentic? </label>
                            <button className="btnBa b ph2 pv1 white br2 pointer f7">
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-up'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                /> {showNumber(info.authentic)}</button>
                            {' '}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7">*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-down'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.notauthentic)}</button>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*<label className='f6'>Recommended? </label>*/}
                            {/*<button className="btnBa b ph2 pv1 white br2 pointer f7">*/}
                            {/*<FontAwesome*/}
                            {/*className='super-crazy-colors'*/}
                            {/*name='thumbs-up'*/}
                            {/*size='1x'*/}
                            {/*style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}*/}
                            {/*/> {showNumber(info.good)}</button>*/}
                            <button className="btnBa b ph2 pv1 white br2 pointer f7">
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-down'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                /> {showNumber(info.bad)}
                            </button>
                        </p>
                        <div className='w-100'>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='map-marker'
                                size='1x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />{' '}
                            <input id={info.price} type='text' size='35' className=" f6" value={info.location}
                                   readOnly/>
                            <button className="btnBa b ph1 pv1 white br2 pointer f7">
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='copy'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                />{' '}Copy
                            </button>
                        </div>
                        <div className='w-100'>
                            <a className="btnBa b ph1 pv1 white br2 pointer f7 mr3" href={info.url}>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='globe'
                                    size='1x'
                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                />{' '}Website</a>
                            <FontAwesome
                                className='super-crazy-colors'
                                name='phone'
                                size='1x'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                            />{' '}
                            <label className="mr3">{info.phone}</label>
                            <label className="">{info.price}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;