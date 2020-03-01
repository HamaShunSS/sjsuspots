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

const onCountry = () => {
    const x = document.getElementById("mySelect").selectedIndex;
    if (x === '') {
        alert('Select a country')
    } else {
        return(document.getElementsByTagName("option")[x].value)
    }
}

const showNumber = (array) => {
    const arrayed = array.split(',')
    const arrayedReal = arrayed.map(str => parseInt(str, 10));
    return ((arrayedReal.length - 1))
}

const string = '';

const Detail = ({ info, changeAuthentic, changeNotAuthentic, changeGood, changeBad, authentic, onCommentChange, onAddComment, onAddBadComment, tobad, toCommentBad, onCommentsChange, onSubmitFormBackCountry, onDeleteSpot, userid, usercountry, onRouteChange} ) => {
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
                            <label className="f6 mr1">Authentic taste? </label>
                            {/*not login*/}
                            {
                                userid === '' &&
                                <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                        onClick={() => {
                                            alert("Please log in first");
                                            onRouteChange('userLogIn')
                                        }}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-up'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
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
                                        onClick={() => {
                                            alert("Please log in first");
                                            onRouteChange('userLogIn')
                                        }}>
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='thumbs-down'
                                        size='1x'
                                        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
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
                                        placeholder='Tell us the reason...'
                                        onChange={onCommentsChange}
                                    />
                                    <button className="btnBa b ph2 pv1 input-reset white br1 grow pointer f7"
                                            onClick={() => {
                                                onAddBadComment(info.id, info.badcomment); //badcomment 追加
                                                changeBad(info.id, info.bad)　//bad 追加
                                            }}> Add a comment
                                    </button>
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
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                        />{' '}
                        <input id={info.location} type='text' size='37' className=" f6" value={info.location}
                               onfocus="this.select();" readOnly/>
                        <button className="btnBa b ph1 pv1 white br2 pointer f7" onClick={() => {
                            copyToClipboard(info.location)
                        }}>
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
                                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
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
                            if (info.badcomment === '') {

                            } else {
                                return (
                                    <div className=''>
                                        <p className="mb2">
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='user-circle'
                                                size='1x'
                                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
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
                    <div className="ml2 ml7-ns mb2"> </div>

                    <label className="tl db fw6 lh-copy f6 pt2 f7">What country of food is this? </label>
                    <select className='f7 ph3-ns pv2-ns pv1 ttll b br2 pointer' name="country" id="mySelect">
                        <option value="">Choose a country...</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote D'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">Falkland Islands</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Ter">French Southern Ter</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">Netherland Antilles</option>
                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                        <option value="Republic of Serbia">Republic of Serbia</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                        <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">Vatican City State</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <button className="btnBa b ph2 pv1 white br2 pointer f7"
                            onClick={() => {onSubmitFormBackCountry(info.id, onCountry())}} >Change</button>
                    <div className='pv3'>
                        <label className="db fw6 lh-copy f7" htmlFor="name">Delete this info</label>
                        <button className="btnBa b ph2 pv1 white br2 pointer f7"
                                onClick={() => {onDeleteSpot(info.id)}} >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;