import React from 'react';
import SpotCardList from './SpotCardList'; //child
import Scroll from '../../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../../SearchBox/SearchBox";
import Detail from "./SpotDetail";
import List from "../../Form/Form";
import CountryList from "./CountryList";
import FUICardList from "../FirstUI/FirstUI";
import {Link} from "react-router-dom";

const FontAwesome = require('react-fontawesome');



class SecondUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            countries: [],
            country: '',
            userId: this.props.userId,
            com:'',
            tobad:'',
            authentic: '0,2,3,4,6,8',
            spot: null,
            detail: 'no',
            item:'',
            iine:'',
            waruiine:'',
            searchfield:'',
        };

    }

    onCommentsChange = (event) => {
        this.setState({com: event.target.value}) // updated signInEmail from <input />
    }

    toCommentBad = (event) => {
        this.setState({tobad: event}) // updated signInEmail from <input />
    }


    componentDidMount() {
        if (this.props.longitude === null || this.props.latitude === null) {
            console.log('現在地', this.props.lon, this.props.lat)
            fetch('https://spots-for-sjsu-students.herokuapp.com/secondUI',
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        lon: this.props.lon,
                        lat: this.props.lat
                    })
                })
                .then(response => response.json())
                .then(informations => {
                    if (informations === 'no data') {
                        this.props.routeCheck('/nodata');
                    } else  {
                        this.setState({businesses: informations})
                    }
                    }
                );
        }　else {
            console.log('指定先', this.props.longitude, this.props.latitude)
            fetch('https://spots-for-sjsu-students.herokuapp.com/secondUI',
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        lon: this.props.longitude,
                        lat: this.props.latitude
                    })
                })
                .then(response => response.json())
                .then(informations => {
                    if (informations === 'no data') {
                        this.props.routeCheck('/nodata');
                    } else  {
                        this.setState({businesses: informations})
                    }
                    }
                );
        }
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
            alert("Please state your reason...");
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
                        this.props.routeCheck('/thankyou');
                    } else if (response === 'incorrect form submission') {
                        this.props.routeCheck('/sorry');
                    }
                })
        }
    }

    //comments
    onAddBadComment =(id, com) => {
        if (this.state.com === '' ) {
            alert("Please state your reason...");
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
                        this.props.routeCheck('/thankyou');
                    } else if (response === 'incorrect form submission') {
                        this.props.routeCheck('/sorry');
                    }
                })
        }
    }



    // Search box
    onSearchChange = (event) => { //whenever it gets changed
        this.setState({searchfield: event.target.value}) //update "serachfiled is event.target.value"
    }

    categoryDisplay = () => {
        if (this.state.searchfield === '') {
            return 'All Categories'
        }　else
            return this.state.searchfield
    }


    onCountryChange = (event) => {
        this.setState({country: event}) // updated signInEmail from <input />
        console.log(event)
    }



    render() {

        //1. resultsからインフォスに (Countryのリスト)
        const filterdCountrys = this.state.businesses.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.country
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
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


        //Businessesのリスト
        const filterdInfos = this.state.businesses.filter(infos => {
            console.log('data is ', infos);
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return (
                infos.country.toLowerCase().includes(this.state.country.toLowerCase())
            )
        })


        //Auth変えるやつ
        const changeAuthentic = (id, authentic) =>{
            const arrayedAuth = authentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userId), this.state.userId)
            if (arrayedReal.indexOf(this.state.userId) === -1) {
                return (arrayedReal.push(this.state.userId), this.onButtonSubmitAuthentic(id, arrayedReal), console.log(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userId), 1), this.onButtonSubmitAuthentic(id, arrayedReal), console.log(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //NotAuth変えるやつ
        const changeNotAuthentic = (id, Notauthentic) =>{
            const arrayedAuth = Notauthentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userId), this.state.userId)
            if (arrayedReal.indexOf(this.state.userId) === -1) {
                return (arrayedReal.push(this.state.userId), this.onButtonSubmitNotAuthentic(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userId), 1), this.onButtonSubmitNotAuthentic(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
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
            console.log(arrayedReal.indexOf(this.state.userId), this.state.userId)
            if (arrayedReal.indexOf(this.state.userId) === -1) {
                return (arrayedReal.push(this.state.userId), this.onButtonSubmitBad(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userId), 1), this.onButtonSubmitBad(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }


        if (this.state.detail === 'yes'){
            return (
                <div>
                    <div className=" w-100 w-100-ns mv2">
                            <label className="pv4-ns f3 pt3 b pv2 f2-ns mh2">Recommended spot</label>
                        <button className='btnSS b ph3-ns pv2-ns ml3 pv1 ph2 btnSS white br-pill pointer f6'>
                            <Link to="/secondUI" style={{color: 'white'}}
                                  onClick={() => {this.setState({detail: 'no'})}}>Back</Link></button>
                    </div>
                        <Detail info={this.state.spot} userid={this.props.userId} usercountry={this.props.usercountry} com={this.state.com} changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={this.state.authentic} onRouteChange={this.props.onRouteChange} onSpotIdChange={this.onSpotIdChange} onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onAddComment={this.onAddComment} onAddBadComment={this.onAddBadComment} onCommentsChange={this.onCommentsChange} toCommentBad={this.toCommentBad} tobad={this.state.tobad} />
                </div>
                )
        }
        if (this.state.businesses.length === 0) {
            return <div className="">

                <div className=" mv2">
                    <label className="fl pv4-ns f6 ml3 tc pv1 db fw6 lh-copy f2-ns">Loading...</label>
                    <button className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>
                        <Link to="/form" style={{color: 'white'}} onClick={() => this.props.routeCheck('')}>Back</Link></button>

                </div>

                <Scroll>
                    <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                    <div className="ph6-ns tc center pb5-ns">
                        <div className="ph6 ph7-ns tc center pb6">
                            <Spinner class='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
                        </div>
                        <p className="pv7 pv7-ns"> </p>
                        <p className="pv7-ns"> </p>
                    </div>
                </Scroll>

            </div>

        } return (
                <div className=" w-100 w-100-ns">
                    <div className="">
                        <label className="pv4-ns f3 pt2 w-100 w-100-ns db fw6 f2-ns">Recommended spots</label>
                    </div>
                    <div className='ma1 ph2 pv2 tl tc-ns'>
                        <ul className="ddmenu">
                            {/*<button className=' ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer mr4 mr6-ns'>*/}
                                {/*<li className='ttll f6 fl'>Category：　{this.categoryDisplay()}*/}
                                    {/*<ul className='ttll'>*/}
                                        {/*<li className='pa1 b' onClick={() => this.setState({searchfield: ''})}>All Categories</li>*/}
                                        {/*<li><p className='pa1 b' onClick={() => this.setState({searchfield: 'Restaurants'})}>Restaurants</p></li>*/}
                                        {/*<li className='pa1 b' onClick={() => this.setState({searchfield: 'Cafes'})}>Cafes</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Bars'})}>Bars</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Clubs'})}>Clubs</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Nature'})}>Nature</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Parks'})}>Parks</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Amusement'})}>Amusement</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Salons'})}>Salons</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Second-hand'})}>second-hand clothes</li>*/}
                                        {/*<li className='b pa1' onClick={() => this.setState({searchfield: 'Others'})}>Others</li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                            {/*</button>*/}
                            <div className="w-100 w-100-ns">
                                <button className='ph3-ns pv2-ns pv1 ph2 clickbtnSS b br2 pointer mr6 mr6-ns'>
                                    <li className='ttll f6 '>
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
                                </button>
                                <button className='btnSS b ph3-ns pv2-ns p12 pv1 ph2 btnSS white br-pill pointer f6'>
                                    <Link to="/" onClick={() => {this.props.routeCheck(''); this.props.routeCheck('')}}>Back</Link></button>
                            </div>

                            {/*<button className=' ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer' */}
                                    {/*onClick={() => {this.props.onRouteChange('/')}}><p className='fl f6'>Back</p></button>*/}


                            {/*<input*/}
                                {/*placeholder="ex) San Jose"*/}
                                {/*className='pa2-ns pl2 pv2 input-reset hover-black hover-bg-white w-80 w-70-ns btnSS b br2 pointer white f6'*/}
                                {/*type="text"*/}
                                {/*name="city"*/}
                                {/*id="name"*/}
                                {/*value={this.state.ssss}*/}
                                {/*onChange={this.onSSSSChange}*/}
                            {/*/>*/}
                            {/*<div className='b db fw6 lh-copy f6 w-80 w-70-ns'> {*/}
                                {/*this.state.ssss.length > 0 &&*/}
                                {/*<CountryList countries={filtterduniqueCountries} onCountry={onCountry}/>*/}
                            {/*}*/}
                            {/*</div>*/}

                        </ul>
                    </div>

                    <div className="bg-white-40">
                        <SpotCardList infos={filterdInfos} changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={this.state.authentic} onRouteChange={this.props.onRouteChange} onSpotIdChange={this.onSpotIdChange} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </div>
                    {/*<Scroll>*/}
                        {/*<SpotCardList infos={filterdInfos} changeAuthentic={changeAuthentic} changeNotAuthentic={changeNotAuthentic} changeGood={changeGood} changeBad={changeBad} authentic={this.state.authentic} onRouteChange={this.props.onRouteChange} onSpotIdChange={this.onSpotIdChange} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>*/}
                    {/*</Scroll>*/}

                    <div className='pv6-ns mb3'>

                    </div>
                </div>
            );

    }
}


export default SecondUI;