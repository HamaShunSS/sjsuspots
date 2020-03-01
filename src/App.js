import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Category from './Components/Search/Category';
import Infos from './Components/Infos/Infos';
import Form from './Components/Form/Form';
import Thankyou from "./Components/Form/Thankyou";
import Sorry from "./Components/Form/Sorry";
import Loading from "./Components/Form/Loading";
import Contact from "./Components/Contact/Contact";
import FirstPage from "./FirstPage";
import Iine from "./Components/Infos/Iine";
import Waruiine from "./Components/Infos/Waruiine";
import NoData from "./Components/FUI/Nodata";
import FUI from "./Components/FUI/FUI";
import GUIforBack from "./Components/GUIforBack/GUIforBack";
import ThankyouB from "./Components/GUIforBack/ThankyouB";
import Touroku from "./Components/GUIforBack/Touroku";
import SignIn from "./Components/GUIforBack/SignIn";
import GUIforMaster from "./Components/GUIforBack/GUIforMaster";
import Mistake from "./Components/GUIforBack/Mistake";
import ThankyouBM from "./Components/GUIforBack/ThankyouBM";
import SUI from "./Components/FUI/SUI";
import About from"./Components/Contact/About"
import UserLogin from "./Components/Form/UserLogin";
import UserSignUp from "./Components/Form/UserSignUp";
import axios from "axios";
import SecondUI from "./Components/FUI/SecondUI/SecondUI";
import Menu from "./Components/Navigation/Menu";
import Mypage from "./Components/Mypage/Mypage";
import FirstUI from "./Components/FUI/FirstUI/FirstUI"





const initialState = {
    category: '',
    region: '',
    route: '/',
    //user
    isSignedIn: '',
    userInfo: '',
    id:'',
    userid: '',
    username:'',
    email:'',
    country:'',
    status:'',
    spot: null,
    lat: null,
    lon: null,
    menu: 'no',
    longitude: null,
    latitude: null,
    currentlon: null,
    currentlat: null

    // user: {
    //     id: '',
    //     name: '',
    //     email: '',
    //     joined: ''
    // }
}

class App extends Component {

    constructor() {
        super();
        this.state = initialState; //interact parent with children
    }

    loadUser = (data) => {
        this.setState({user: {
                id: data.id,
                name: data.name,
                email: data.email,
                joined: data.joined
            }})
    }

    loadCategory = (cat) => {
        this.setState({
            category: cat
        })
    }

    loadRegion = (region) => {
        this.setState({
            region: region
        })
    }

    loadLonLat = (lon, lat) => {
        this.setState({
            longitude: lon,
            latitude: lat
        })
        console.log(this.state.longitude, this.state.latitude)
    }

    loadisSignedInChange = (event) => {
        this.setState({
            isSignedIn: event,
            email: '',
            username: '',
            country: '',
            status: '',
            userid: ''
        })
        console.log(this.state.longitude, this.state.latitude)
    }


    onRouteChange = (route) => {
        this.setState({route: route});
    }

    onMenuChange = (menu) => {
        this.setState({
            menu: menu
        });
    }


    onIsSignedInChange = (username, email, country, status, id) => {
        this.setState({

            isSignedIn: 'yes',
            email: email,
            username:username,
            country: country,
            status: status,
            userid: id
            //                             // userName: informations.userName,
            //                             // country: informations.userInfo.country
                                    });
        console.log('ついた!sign　', this.state.isSignedIn)
        console.log('userid is　', this.state.userid)
        // fetch('https://spots-for-sjsu-students.herokuapp.com/user', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
        //         email: email,
        //     })
        // })
        //                 .then(response => response.json())
        //                 .then(response => {
        //                     if (response === 'Not found') {
        //                         console.log('えらー', response)
        //                     }
        //                         this.setState({
        //                             id: response.id,
        //                             email: response.email,
        //
        //                         })
        //                 }
        //                 );
        //                 console.log('email ha ', this.state.email);
    }




  render() {
      const { isSignedIn, route, email} = this.state;
      // const num = 100
      // // //現在地特定
      //
      // navigator.geolocation.getCurrentPosition(
      //         pos => this.setState({
      //             lat: Math.round(pos.coords.latitude* num)/ num, //numはどの桁で切り上げるか
      //             lon: Math.round(pos.coords.longitude* num)/ num
      //         }),
      //         err => console.log(err)
      //     );
      //     console.log('lat and lon', this.state.lat, this.state.lon)

      navigator.geolocation.getCurrentPosition(
          pos => this.setState({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude
          }),
          err => console.log(err)
      );
      console.log(this.state.lon, this.state.lat)



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
      //         console.log(res.data)
      //     })
      //     .catch((err) => {
      //         console.log ('error')
      //     })



    return (
        <div className="App">
            {/*ラウト変換できるなら*/}
            {/*<Router>*/}
                {/*<Fragment>*/}
                    {/*<Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} username={this.state.username}/>*/}
                    {/*<Route exact path="/" route={this.state.route}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} isSignedIn={this.state.isSignedIn} category={this.state.category} region={this.state.region} component={ FUI } />*/}
                    {/*<section className="container">*/}
                        {/*<Switch>*/}
                            {/*<Route exact path='/form'  component={ Form }/>*/}
                            {/*<Route exact path='/thankyou'  component={ Thankyou }/>*/}
                            {/*<Route exact path='/iine'  component={ Iine }/>*/}
                            {/*<Route exact path='/waruiine'  component={ Waruiine }/>*/}
                            {/*<Route exact path='/loading'  component={ Loading }/>*/}
                            {/*<Route exact path='/back' status={this.state.status}  component={ GUIforBack }/>*/}
                            {/*<Route exact path='/sorry'  component={ Sorry }/>*/}
                            {/*<Route exact path='/thankyoub'  component={ ThankyouB }/>*/}
                            {/*<Route exact path='/nodata'  component={ NoData }/>*/}
                            {/*<Route exact path='/touroku' onIsSignedInChange={this.onIsSignedInChange} component={ Touroku }/>*/}
                            {/*<Route exact path='/signin' onIsSignedInChange={this.onIsSignedInChange}  component={ SignIn }/>*/}
                            {/*<Route exact path='/backMaster' email={this.state.email} status={this.state.status}  component={ GUIforMaster }/>*/}
                            {/*<Route exact path='/mistake'  component={ Mistake }/>*/}
                            {/*<Route exact path='/thankyouBM'  component={ ThankyouBM }/>*/}
                            {/*<Route exact path='/sui' onRouteChange={this.onRouteChange} route={this.state.route} loadCategory={this.loadCategory} loadRegion={this.loadRegion} isSignedIn={this.state.isSignedIn} category={this.state.category} region={this.state.region} component={ SUI }/>*/}
                            {/*<Route exact path='/userLogIn' onIsSignedInChange={this.onIsSignedInChange} component={ UserLogin }/>*/}
                            {/*<Route exact path='/about'  component={ About }/>*/}
                            {/*<Route exact path='/userSignUp' onIsSignedInChange={this.onIsSignedInChange}  component={ UserSignUp }/>*/}
                            {/*<Route exact path='/iine'  component={ Iine }/>*/}
                        {/*</Switch>*/}
                    {/*</section>*/}
                {/*</Fragment>*/}
            {/*</Router>*/}

            <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} username={this.state.username} onMenuChange={this.onMenuChange} menu={this.state.menu}/>
            {
                this.state.menu === 'yes' &&
                    <Menu onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} username={this.state.username} onMenuChange={this.onMenuChange} menu={this.state.menu} loadisSignedInChange={this.loadisSignedInChange} onIsSignedInChange={this.onIsSignedInChange}/>
            }
            <div onClick={() => {this.onMenuChange('no')}}>
            { route === 'home'
                ? <div>
                    < FUI route={this.state.route}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} isSignedIn={this.state.isSignedIn} category={this.state.category} region={this.state.region} loadLonLat={this.loadLonLat} />
                </div>
                :(
                    // route === 'category'
                    //     ?< Category loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} region={this.state.region}/>
                    //     :(
                    //         route === 'infos'
                    //             ?< Infos route={this.state.route} loadUser={this.loadUser}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} category={this.state.category} region={this.state.region}/>
                    //             :(
                                    route === 'thankyou'
                                        ?< Thankyou onRouteChange={this.onRouteChange} region={this.state.region} />
                                        :(
                                            route === 'iine'
                                                ?< Iine onRouteChange={this.onRouteChange} region={this.state.region}/>
                                                :(
                                                    route === 'waruiine'
                                                        ?< Waruiine onRouteChange={this.onRouteChange} region={this.state.region}/>
                                                        :(
                                                            route === 'loading'
                                                                ?< Loading onRouteChange={this.onRouteChange} />
                                                                    :(
                                                                        route === 'back'
                                                                            ?< GUIforBack onRouteChange={this.onRouteChange} status={this.state.status} />
                                                                            :(
                                                                                route === 'sorry'
                                                                                    ?< Sorry onRouteChange={this.onRouteChange} />
                                                                                    :(
                                                                                        route === 'thankyoub'
                                                                                            ?< ThankyouB onRouteChange={this.onRouteChange} />
                                                                                            :(
                                                                                                route === 'nodata'
                                                                                                    ?< NoData onRouteChange={this.onRouteChange} />
                                                                                                    :(
                                                                                                        route === 'touroku'
                                                                                                            ?< Touroku onIsSignedInChange={this.onIsSignedInChange}  onRouteChange={this.onRouteChange} />
                                                                                                            :(
                                                                                                                route === 'signin'
                                                                                                                    ?< SignIn onIsSignedInChange={this.onIsSignedInChange}  onRouteChange={this.onRouteChange} />
                                                                                                                    :(
                                                                                                                        route === 'backMaster'
                                                                                                                            ?< GUIforMaster onRouteChange={this.onRouteChange} email={this.state.email} status={this.state.status} />
                                                                                                                            :(
                                                                                                                                route === 'mistake'
                                                                                                                                    ?< Mistake onRouteChange={this.onRouteChange} />
                                                                                                                                    :(
                                                                                                                                        route === 'thankyouBM'
                                                                                                                                            ?< ThankyouBM onRouteChange={this.onRouteChange} />
                                                                                                                                            :(
                                                                                                                                                route === 'sui'
                                                                                                                                                    ?< SUI onRouteChange={this.onRouteChange} route={this.state.route} loadCategory={this.loadCategory} loadRegion={this.loadRegion} isSignedIn={this.state.isSignedIn} category={this.state.category} region={this.state.region}/>
                                                                                                                                                    :(
                                                                                                                                                        route === 'userLogIn'
                                                                                                                                                            ?< UserLogin onIsSignedInChange={this.onIsSignedInChange} onRouteChange={this.onRouteChange} />
                                                                                                                                                            :(
                                                                                                                                                                route === 'about'
                                                                                                                                                                    ?< About onRouteChange={this.onRouteChange} />
                                                                                                                                                                    :(
                                                                                                                                                                        route === 'userSignUp'
                                                                                                                                                                            ?< UserSignUp onIsSignedInChange={this.onIsSignedInChange} onRouteChange={this.onRouteChange} />
                                                                                                                                                                            :(
                                                                                                                                                                                route === 'secondUI'
                                                                                                                                                                                    ?< SecondUI onIsSignedInChange={this.onIsSignedInChange} onRouteChange={this.onRouteChange} lon={this.state.lon} lat={this.state.lat} longitude={this.state.longitude} latitude={this.state.latitude} userId={this.state.userid} username={this.state.username} usercountry={this.state.country}/>
                                                                                                                                                                                    :(
                                                                                                                                                                                        route === 'mypage'
                                                                                                                                                                                            ?< Mypage onRouteChange={this.onRouteChange} userid={this.state.userid} username={this.state.username} usercountry={this.state.country} email={this.state.email} status={this.state.status} />
                                                                                                                                                                                            :(
                                                                                                                                                                                                route === '/'
                                                                                                                                                                                                    ?< FirstUI onIsSignedInChange={this.onIsSignedInChange} onRouteChange={this.onRouteChange} loadLonLat={this.loadLonLat}  lon={this.state.lon} lat={this.state.lat} longitude={this.state.longitude} latitude={this.state.latitude} userId={this.state.userid} username={this.state.username} usercountry={this.state.country}/>
                                                                                                                                                                                                    :(
                                                                                                                                                                                                        < Form route={this.state.route} userid={this.state.userid} username={this.state.username} country={this.state.country} onRouteChange={this.onRouteChange} onInputChange={this.onInputChange} />
                                                                                                                                                                                                    )
                                                                                                                                                                                            )
                                                                                                                                                                                    )
                                                                                                                                                                            )
                                                                                                                                                                    )
                                                                                                                                                            )
                                                                                                                                                    )
                                                                                                                                            )
                                                                                                                                    )
                                                                                                                            )
                                                                                                                    )
                                                                                                            )
                                                                                                    )
                                                                                            )
                                                                                    )
                                                                            )
                                                                    )
                                                          )
                                                    )
                                        )
                                )
                //         )
                // )
            }
            <Contact isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        </div>
        </div>
    );
  }
}

export default App;
