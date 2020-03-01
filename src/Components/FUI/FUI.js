import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";
import axios from 'axios';
import CityList from "./CityList";
import List from "../Form/Form";
import SanMateoCountyList from "./SanMateoList";
import SantaClaraCountyList from "./SantaClaraList";
import MontereyCountyList from "./MontereyList";

const FontAwesome = require('react-fontawesome');

class FUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            spots: [],
            citys: [], //'Alameda', 'Contra Costa', 'Marin', 'Napa', 'San Francisco', 'San Mateo', 'Santa Clara', 'Solano','Sonoma'
            countyArray:[],
            santaClaraArray: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Palo Alto', 'Mountain View', 'Cupertino', 'Milpitas', 'Saratoga', 'Campbell'],
            sanMateoArray: ['San Mateo', 'South San Francisco', 'Menlo Park'],
            montereyArray: ['Monterey', 'Seaside', 'Salinas'],
            authentic: [0,2,4,6,8],
            fakeid: 3,
            city: '',
            // currentlat: null,
            // currentlon: null,
            userInfo: '',
            item:'',
            iine:'',
            waruiine:'',
            com:'',
            searchfield:'',
            searchfieldArea:'',
            region:'',
            lat: '',
            lon: '',
            informations:[]
        };

    }

    onCommentsChange = (event) => {
        this.setState({com: event.target.value}) // updated signInEmail from <input />
    }


    componentDidMount() {
        if (this.props.isSignedIn === 'true') {
            fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
                .then(response => response.json())
                .then(informations => this.setState({results: informations})
                );
            // fetch('https://spots-for-sjsu-students.herokuapp.com/profile/:id')
            //     .then(response => response.json())
            //     .then(informations => this.setState({userInfo: informations})
            //     );
        }
            fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
                .then(response => response.json())
                .then(informations => this.setState({
                    results: informations})
                );
        fetch('https://spots-for-sjsu-students.herokuapp.com/allSpot')
            .then(response => response.json())
            .then(spots => this.setState({spots: spots})
            );
    }


    // iine
    onButtonSubmit = (id) => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/button',
            { //fetch connects frontend with the server
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                id: id
            })
        })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(count => {
                    this.setState({iine: count})
                // this.setState(Object.assign(this.state.user, {entries: count}))
            })
        if (this.props.route === '/') {
            this.props.onRouteChange('iine');
        }
    }

    //waruiine

    onButtonSubmitW = (id) => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/buttonW',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(count => {
                this.setState({waruiine: count})
                // this.setState(Object.assign(this.state.user, {entries: count}))
            })
        if (this.props.route === '/') {
            this.props.onRouteChange('waruiine');
        }
    }

    //comments
    onSubmitForm =(id, com) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
                if (this.props.route === 'infos') {
                    this.props.onRouteChange('loading');
                }
                console.log('com のナカは ', this.state.com)
                fetch('https://spots-for-sjsu-students.herokuapp.com/addcomments', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                        id: id,
                        com: this.state.com,
                        originalComments: com
                    })
                })
                    .then(response => response.json()) // Get response through json, and get data by ".then"
                    .then(response => {
                        if (response === 'success') {
                            this.props.onRouteChange('thankyou');
                        } else if (response === 'incorrect form submission') {
                            this.props.onRouteChange('sorry');
                        }
                    })
            }
    }

    // Search box
    onSearchChange = (event) => { //whenever it gets changed
        this.setState({searchfield: event.target.value}) //update "serachfiled is event.target.value"
    }

    bashoDisplay = () => {
        if (this.state.searchfield === '') {
            return 'All Regions'
        }　else
            return this.state.searchfield
    }


    onCityChange = (event) => {
        this.setState({city: event.target.value}) // updated signInEmail from <input />
    }

    // // Check id
    // checkAuthentic = () =>{
    //     this.state.authentic.filter((id) =>{
    //             return (id === this.state.fakeid)
    //     })
    // }
    //
    // changeAuthentic = () =>{
    //     const auth = this.checkAuthentic;
    //     console.log(auth.length)
    //         // if (auth.length === 0) {
    //         //     console.log(auth.length)
    //         //     return (this.state.authentic.push(this.state.fakeid))
    //         // }
    //         // console.log(this.state.authentic)
    //         //     return (delete this.state.authentic[this.state.fakeid])
    //
    // }




    render() {


        // const filterdIn = this.state.citys.filter(infos => {
        //     //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
        //
        //     //ArrayList<String> cashList = new ArrayList<>(infos.price);
        //
        //
        //     return (
        //         infos.toLowerCase().includes(this.state.city.toLowerCase())
        //         // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
        //         // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
        //         // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
        //     )
        // })


        //IDが無ければauthentic押せて、あれば消す
        const changeAuthentic = () =>{
            if (this.state.authentic.indexOf(this.state.fakeid) === -1) {
                return (this.state.authentic.push(this.state.fakeid), console.log(this.state.authentic.length, this.state.authentic))
            }
                return (this.state.authentic.splice(this.state.authentic.indexOf(this.state.fakeid), 1), console.log(this.state.authentic.length, this.state.authentic))
        }




        //1. resultsからインフォスに
        const filterdCitys = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.location
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

        //2. mapしてinfo.locationからcityを作りcitysに入れる
        filterdCitys.map((info, i) => {
            const addressParse = info.location.split(",");
            const lac = addressParse[1].replace(" ","");
            // console.log(this.state.citys)

            return (
                this.state.citys[i] =  lac
            )
        })

        //3. ダブってるやつを無くす
        const uniqueCitys = this.state.citys.filter((val,id,array) => array.indexOf(val) == id);

        //4. テキストボックス(this.state.city)とリンク
        const filtterduniqueCitys = uniqueCitys.filter((cit) => {
            return (
                cit.toLowerCase().includes(this.state.city.toLowerCase())
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

        const showMonterey = this.state.montereyArray.filter((city) => {
            if (city.toLowerCase().includes(this.state.city.toLowerCase())) {
                return (city)
            }
        })

        const onLonLat = (lat, lon) => {
            this.setState({
                lat: lat,
                lon: lon
            })
            console.log(this.state.lat, this.state.lon)
        }

        // const getCurrentLocation = ()=>{
        //     navigator.geolocation.getCurrentPosition(
        //         pos => this.setState({
        //             lat: pos.coords.latitude,
        //             lon: pos.coords.longitude
        //         }),
        //         err => console.log(err)
        //     );
        //     console.log(this.state.lat, this.state.lon)
        // }

        const onId = (res) => {
            this.setState({
                city: res,
            })
        }

        console.log(this.state.spots)



        //YelpのAPI
        const ap = 'https://api.yelp.com/v3/businesses/search';
        const city = 'San Jose';

        // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        //     headers: {
        //         Authorization: `Bearer iUa74dNqkfO5M737VXORC5lPpdKH460feCmM1pNg0VsUCR72lyFXQB84vNGkK3M1yVWcfp1wV0Vu5qTt0DRFm0aFanDBhbIB0nxKnuJe3FmaSne6_5omll6UyTUuXnYx`
        //     },
        //     params: {
        //         latitude: this.state.lat,
        //         longitude: this.state.lon,
        //         radius: 3500,
        //         categories: 'breakfast_brunch',
        //         limit: 50
        //     }
        // })
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log ('error')
        //     })

        //現在地特定



        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            //ArrayList<String> cashList = new ArrayList<>(infos.price);
            return (
                infos.price.toLowerCase().includes(this.state.searchfield.toLowerCase())
                // infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                // infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })
        // const child = { width: `30em`, height: `100%`}
        // const parent = { width: `60em`, height: `100%`}


        if (this.state.results.length === 0) {
            return <div className="fl w-100 w-100-ns">
                <div className="">
                    <label className="fl pv4-ns f3 pv3 w-100 w-100-ns tc db fw6 lh-copy f2-ns">リコット</label>
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
                        <div className='pb3'>
                        <label className="w-100 w-100-ns pv4-ns f3 pv3 tc db fw6 lh-copy f2-ns">リコット</label>

                            <div className="w-100 w-100-ns">
                                <div className='pt2 tl ml3 w-80 w-70-ns '>
                                    <label className="b db fw6 lh-copy f6 " htmlFor="">City Name: </label>
                                    <input
                                        placeholder="ex) San Jose"
                                        className=' pa2-ns pl2 pv2 w-80 w-70-ns br2 hover-bg-white input-reset hover-black btnSS b pointer white f6'
                                        type="text"
                                        name="city"
                                        id="name"
                                        value={this.state.city}
                                        onChange={this.onCityChange}
                                    />
                                    <input
                                        onClick={ ()=>{
                                            if (this.state.lon === '' || this.state.lat === '') {
                                                alert("chose an option below")
                                            } else {
                                                this.props.loadLonLat(this.state.lon, this.state.lat); this.props.onRouteChange('secondUI')
                                            }
                                        }}
                                        className='b pa2-ns pv2 input-reset br2 w-20 w-10-ns clickbtnSS pointer f6'
                                        type="submit"
                                        value="Search"
                                    />
                                    <div className='b db fw6 lh-copy f6 w-80 w-70-ns'>{
                                        this.state.city.length > 0 &&
                                        <div className=' ma2-ns grow-ns shadow-5 br1 bw2 bg-white-80' onClick={()=>{
                                            onId('Current Location'); this.setState({
                                                lon: null,
                                                lat: null
                                            })
                                        }}>
                                            <div className="black tc ">
                                                <div className="pa1 tl">
                                                    <h4 >Current Location</h4>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    </div>
                                    <div className='b db fw6 lh-copy f6 w-80 w-70-ns'>{
                                        this.state.city.length > 0 &&
                                        <SantaClaraCountyList showSantaClara={showSantaClara} onId={onId} onLonLat={onLonLat}/>
                                    }
                                    </div>
                                    <div className='b db fw6 lh-copy f6 tl w-80 w-70-ns'>{
                                        this.state.city.length > 0 &&
                                        <SanMateoCountyList showSanMateo={showSanMateo} onId={onId} onLonLat={onLonLat}/>
                                    }
                                    </div>
                                    <div className='b db fw6 lh-copy f6 tl w-80 w-70-ns'>{
                                        this.state.city.length > 0 &&
                                        <MontereyCountyList showMonterey={showMonterey} onId={onId} onLonLat={onLonLat}/>
                                    }
                                    </div>
                                </div>

                                </div>
                                {/*<div className='b db fw6 lh-copy f6 pt2 tl'>{*/}
                                    {/*this.state.city.length > 0 &&*/}
                                    {/*<CityList uniqueCitys={filtterduniqueCitys} onId={onId} />*/}
                                {/*}*/}
                                {/*</div>*/}


                    </div>

                    {/*<div className='ma0 w50-ns pb2 ml3'>*/}
                            {/*<ul className="ddmenu tl tc-ns ">*/}
                                {/*<button className='tc ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer'>*/}
                                    {/*<li className='ttll fl f6'>Nearby：　{this.bashoDisplay()}*/}
                                        {/*<ul className='ttll'>*/}
                                            {/*<li className='pa1 b link' onClick={() => this.setState({searchfield: ''})}>All Regions</li>*/}
                                            {/*<li className='pa1 b link' onClick={() => {this.props.loadRegion('San Jose'); this.props.onRouteChange('sui')}}>San Jose</li>*/}
                                            {/*<li className='pa1 b link' onClick={() =>{this.props.loadRegion('San Francisco'); this.props.onRouteChange('sui')}}>San Francisco</li>*/}
                                            {/*<li className='b pa1' onClick={() =>{this.props.loadRegion('Santa Cruz'); this.props.onRouteChange('sui')}}>Santa Cruz</li>*/}
                                            {/*/!*<li className='b pa1' onClick={() =>{this.props.loadRegion('Berkeley'); this.props.onRouteChange('sui')}}>Berkeley</li>*!/*/}
                                            {/*<li className='b pa1' onClick={() =>{this.props.loadRegion('Monterey'); this.props.onRouteChange('sui')}}>Monterey</li>*/}
                                            {/*/!*<li className='b pa1' onClick={() =>{this.props.loadRegion('San Luis Obispo'); this.props.onRouteChange('sui')}}>San Luis Obispo</li>*!/*/}
                                        {/*</ul>*/}
                                    {/*</li>*/}
                                {/*</button>*/}
                            {/*</ul>*/}
                    {/*</div>*/}


                    {/*<SearchBox onSearchChange={this.onSearchChange}/>*/}
                    <Scroll className="">
                        <CardList infos={filterdInfos}　onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </Scroll>
                    <div className="mv6-ns">

                    </div>
                    <div className='pv7-ns'>

                    </div>
                </div>
            );
        }
    }
}


export default FUI;