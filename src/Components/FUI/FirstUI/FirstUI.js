import React from 'react';
import Scroll from '../../Scroll';
import Spinner from 'react-spinner-material';

import {Link} from "react-router-dom";
import axios from 'axios';
import CityList from "../CityList";
import SanMateoCountyList from "../SanMateoList";
import SantaClaraCountyList from "../SantaClaraList";
import MontereyCountyList from "../MontereyList";
import FUICardList from "./FUICardList";
import Detail from "../SecondUI/SpotDetail";
import CountryList from "../SecondUI/CountryList";
import SanFranciscoCountyList from "../SanFranciscoList";

const FontAwesome = require('react-fontawesome');

class FirstUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            citys: [], //'Alameda', 'Contra Costa', 'Marin', 'Napa', 'San Francisco', 'San Mateo', 'Santa Clara', 'Solano','Sonoma'
            countyArray:[],
            santaClaraArray: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Palo Alto', 'Mountain View', 'Cupertino', 'Milpitas', 'Saratoga', 'Campbell', 'los Altos', 'Stanford', 'Los Gatos'],
            sanMateoArray: ['San Mateo', 'South San Francisco', 'Menlo Park', 'Daly City', 'San Bruno', 'Millbrae', 'Belmont', 'Pacifica', 'San Carlos'],
            sanFranciscoArray: ['San Francisco'],
            montereyArray: ['Monterey', 'Seaside', 'Salinas', 'Marina'],
            authentic: [0,2,4,6,8],
            fakeid: 3,
            city: '',
            detail:'no',
            countries:[],
            country:'',
            spot: [],
            tobad:'',
            com:'',
            searchfield:'',
            searchfieldArea:'',
            informations:[]
        };

    }

    onCommentsChange = (event) => {
        this.setState({com: event.target.value}) // updated signInEmail from <input />
    }

    toCommentBad = (event) => {
        this.setState({tobad: event}) // updated signInEmail from <input />
    }


    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/allSpot')
            .then(response => response.json())
            .then(spots => this.setState({results: spots})
            );
    }




    //Authentic fetch
    onButtonSubmitAuthentic = (id, arrayA) => {
        console.log(arrayA)
        const stringifiedAuth = arrayA.join(',');
        console.log(stringifiedAuth);
        fetch('https://spots-for-sjsu-students.herokuapp.com/authenticButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    stringifiedAuth: stringifiedAuth
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {

            this.props.routeCheck('/thankyou');
            // this.props.onRouteChange('thankyou');
        }
    }

    //NotAuthentic fetch
    onButtonSubmitNotAuthentic = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/notauthenticButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.routeCheck('/thankyou');

        }
    }

    //Good fetch
    onButtonSubmitGood = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/goodButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.routeCheck('/thankyou');
        }
    }

    //Bad fetch
    onButtonSubmitBad = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/badButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.routeCheck('/thankyou');
        }
    }

    onSpotIdChange = (spot) => {
        this.setState({
            spot: spot,
            detail: 'yes'
        });
    }




    //comments
    onAddComment =(id, com) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'secondUI') {
                this.props.onRouteChange('loading');
            }
            console.log('com のナカは ', this.state.com)
            fetch('https://spots-for-sjsu-students.herokuapp.com/addcomment', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    com: this.state.com,
                    originalComments: com,
                    userid: this.props.userId,
                    username: this.props.username,
                    country: this.props.usercountry
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.routeCheck('/thankyou')
                        // this.props.onRouteChange('thankyou');
                    } else if (response === 'incorrect form submission') {
                        this.props.routeCheck('/sorry')
                    }
                })
        }
    }

    //comments
    onAddBadComment =(id, com) => {
        if (this.state.com === '' ) {
            alert("Tell us the reason...");
        } else {
            if (this.props.route === 'secondUI') {
                this.props.onRouteChange('loading');
            }
            console.log('com のナカは ', this.state.com)
            fetch('https://spots-for-sjsu-students.herokuapp.com/addbadcomment', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    com: this.state.com,
                    originalComments: com,
                    userid: this.props.userId,
                    username: this.props.username,
                    country: this.props.usercountry
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.routeCheck('/thankyou')
                        // this.props.onRouteChange('thankyou');
                    } else if (response === 'incorrect form submission') {
                        this.props.routeCheck('/sorry')
                    }
                })
        }
    }

    onCountryChange = (event) => {
        this.setState({country: event}) // updated signInEmail from <input />
        console.log(event)
    }

    onCityChange = (event) => {
        this.setState({city: event.target.value}) // updated signInEmail from <input />
    }

    onSpotIdChange = (spot) => {
        console.log(spot)
        this.setState({
            spot: spot,
            detail: 'yes'
        });
    }






    render() {

        const filterdCountrys = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.country
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

        //2. mapしてinfo.locationからcityを作りcitysに入れる
        filterdCountrys.map((info, i) => {
            // const countryParse = info.country.split(",");
            // const lac = countryParse[1].replace(" ","");
            // console.log(this.state.citys)

            return (
                this.state.countries[i] = info.country
            )
        })

        //3. ダブってるやつを無くす
        const uniqueCountries = this.state.countries.filter((val,id,array) => array.indexOf(val) == id);

        //4. テキストボックス(this.state.city)とリンク
        const filtterduniqueCountries = uniqueCountries.filter((country) => {
            return (
                country
            )
        })

        const filterdSpots = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.country.toLowerCase().includes(this.state.country.toLowerCase())
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })


        const showSantaClara = this.state.santaClaraArray.filter((city) => {
            if (city.toLowerCase().includes(this.state.city.toLowerCase())) {
                return (city)
            }
        })

        const showSanMateo = this.state.sanMateoArray.filter((city) => {
            if (city.toLowerCase().includes(this.state.city.toLowerCase())) {
                return (city)
            }
        })

        const showSanFrancisco = this.state.sanFranciscoArray.filter((city) => {
            if (city.toLowerCase().includes(this.state.city.toLowerCase())) {
                return (city)
            }
        })

        const showMonterey = this.state.montereyArray.filter((city) => {
            if (city.toLowerCase().includes(this.state.city.toLowerCase())) {
                return (city)
            }
        })


        const onId = (res) => {
            this.setState({
                city: res,
            })
        }

        console.log(this.state.results)



        //Auth変えるやつ
        const changeAuthentic = (id, authentic) =>{
            const arrayedAuth = authentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.props.userId), this.props.userId)
            if (arrayedReal.indexOf(this.props.userId) === -1) {
                return (arrayedReal.push(this.props.userId), this.onButtonSubmitAuthentic(id, arrayedReal), console.log(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.props.userId), 1), this.onButtonSubmitAuthentic(id, arrayedReal), console.log(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //NotAuth変えるやつ
        const changeNotAuthentic = (id, Notauthentic) =>{
            const arrayedAuth = Notauthentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.props.userId), this.props.userId)
            if (arrayedReal.indexOf(this.props.userId) === -1) {
                return (arrayedReal.push(this.props.userId), this.onButtonSubmitNotAuthentic(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.props.userId), 1), this.onButtonSubmitNotAuthentic(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //Good変えるやつ
        const changeGood = (id, good) =>{
            const array = good.split(',')
            const arrayedReal = array.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userId), this.state.userId)
            if (arrayedReal.indexOf(this.state.userId) === -1) {
                return (arrayedReal.push(this.state.userId), this.onButtonSubmitGood(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userId), 1), this.onButtonSubmitGood(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //Bad変えるやつ
        const changeBad = (id, event) =>{
            const array = event.split(',')
            const arrayedReal = array.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.props.userId), this.props.userId)
            if (arrayedReal.indexOf(this.props.userId) === -1) {
                return (arrayedReal.push(this.props.userId), this.onButtonSubmitBad(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.props.userId), 1), this.onButtonSubmitBad(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }


        if (this.state.detail === 'yes'){
            return (
                <div>
                    <div className=" w-100 w-100-ns mv3">
                        <label className="pv4-ns f3 pt3 pv2 fw6 f2-ns mh2">Detail</label>
                        <button className='ph3-ns pv2-ns pv1 ph2 ml4 btnSS b white br-pill pointer' onClick={() => {this.setState({detail: 'no'})}}><p className='fl f6'>Back</p></button>
                    </div>
                    <Detail info={this.state.spot} userid={this.props.userId} usercountry={this.props.usercountry} com={this.state.com} changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={this.state.authentic} onRouteChange={this.props.onRouteChange} onSpotIdChange={this.onSpotIdChange} onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onAddComment={this.onAddComment} onAddBadComment={this.onAddBadComment} onCommentsChange={this.onCommentsChange} toCommentBad={this.toCommentBad} tobad={this.state.tobad} />
                </div>
            )
        }
        if (this.state.results.length === 0) {
            return <div className="fl w-100 w-100-ns">
                <div className="">
                    <label className='moji b f3 f2-ns mv3 ma3-ns pv2-ns'>Recotto</label>
                </div>
                <Scroll>
                    <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                    <div className="ph6-ns tc center pb5-ns">
                        <div className="ph6 ph7-ns tc center pb6">
                            <Spinner className='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
                        </div>
                        <p className="pv7 pv7-ns"> </p>
                        <p className="pv7-ns"> </p>
                    </div>
                </Scroll>

            </div>

        }
        else {
            return (
                <div className="">
                    <div className='pb3 bb-white mb1'>
                        <div className='mv2'>
                            <label className='b f4 f2-ns mv2 ma3-ns pv2-ns'>Discover authentic restaurants!!</label>
                        </div>
                        <div className="w-100 w-100-ns mt2">
                            <div className=' tl ml3 w-90 w-70-ns '>
                                <input
                                    placeholder="ex) San Jose"
                                    className=' pa2-ns ph2 pv2 w-80 w-80-ns br2 input-reset hover-black btnSS b pointer white f6'
                                    type="search"
                                    name="city"
                                    id="name"
                                    value={this.state.city}
                                    onChange={this.onCityChange}
                                />
                                {
                                    this.props.longitude === '' && this.props.latitude === '' &&
                                    <button
                                        onClick={ ()=>{
                                                alert("choose an option below")
                                        }}
                                        className='b pa2-ns pv2 input-reset br2 w-20 w-20-ns clickbtnSS pointer f6'
                                    >Search</button>
                                }
                                {
                                    this.props.longitude !== '' && this.props.latitude !== '' &&
                                    <button
                                        className='b pa2-ns pv2 input-reset br2 w-20 w-20-ns clickbtnSS pointer f6'
                                    ><Link to="/secondUI">Search</Link></button>
                                }

                                <div className='b db fw6 lh-copy f6 w-80 w-80-ns'>{
                                    this.state.city.length > 0 && this.props.lon !== null &&
                                    <div className=' grow-ns shadow-5 br1 bw2 bg-white-80' onClick={()=>{
                                        onId('Current Location'); this.props.loadLonLat(null, null)
                                    }}>
                                        <div className="black tc ">
                                            <div className="pa1 tl">
                                                <h4 >Current Location</h4>
                                            </div>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div className='b db fw6 lh-copy f6 w-80 w-80-ns'>{
                                    this.state.city.length > 0 &&
                                    <SantaClaraCountyList showSantaClara={showSantaClara} onId={onId} loadLonLat={this.props.loadLonLat}/>
                                }
                                </div>
                                <div className='b db fw6 lh-copy f6 tl w-80 w-80-ns'>{
                                    this.state.city.length > 0 &&
                                    <SanMateoCountyList showSanMateo={showSanMateo} onId={onId} loadLonLat={this.props.loadLonLat}/>
                                }
                                </div>
                                <div className='b db fw6 lh-copy f6 tl w-80 w-80-ns'>{
                                    this.state.city.length > 0 &&
                                    <SanFranciscoCountyList showSanFrancisco={showSanFrancisco} onId={onId} loadLonLat={this.props.loadLonLat}/>
                                }
                                </div>
                                <div className='b db fw6 lh-copy f6 tl w-80 w-80-ns'>{
                                    this.state.city.length > 0 &&
                                    <MontereyCountyList showMonterey={showMonterey} onId={onId} loadLonLat={this.props.loadLonLat}/>
                                }
                                </div>

                                <button className='ph3-ns pv2-ns pv1 ph2 clickbtnSS b br2 pointer mt3 mr6-ns'>
                                    <ul className="ddmenu">
                                        <li className='ttll f6 fl'>
                                            <FontAwesome
                                                className='super-crazy-colors'
                                                name='list'
                                                size='1x'
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                            />{' '}
                                            Cuisine from
                                            <ul className=' tc w-100 w-100-ns '>
                                                <div className='shadow-5 pv1 br1 bw2 bg-white-80' onClick={() =>{this.onCountryChange('')}}>
                                                    <div className="black tc ">
                                                        <div className="pa1 tl">
                                                            <li className='' >All</li>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CountryList countries={filtterduniqueCountries} onCountryChange={this.onCountryChange}/>
                                            </ul>
                                        </li>
                                    </ul>
                                </button>
                            </div>

                        </div>


                    </div>

                    <div className="bg-white-40">
                        <FUICardList infos={filterdSpots} onSpotIdChange={this.onSpotIdChange}　onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </div>
                    <div className="mv6-ns">

                    </div>
                    <div className='pv7-ns'>

                    </div>
                </div>
            );
        }
    }
}


export default FirstUI;