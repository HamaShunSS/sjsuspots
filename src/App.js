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
import NoData from "./Components/Infos/Nodata";
import FUI from "./Components/FUI/FUI";
import GUIforBack from "./Components/GUIforBack/GUIforBack";
import ThankyouB from "./Components/GUIforBack/ThankyouB";
import Touroku from "./Components/GUIforBack/Touroku";
import SignIn from "./Components/GUIforBack/SignIn";
import GUIforMaster from "./Components/GUIforBack/GUIforMaster";
import Mistake from "./Components/GUIforBack/Mistake";
import ThankyouBM from "./Components/GUIforBack/ThankyouBM";
import SUI from "./Components/FUI/SUI";





const initialState = {
    category: '',
    region: '',
    route: '/',
    isSignedIn: true,
    user: {
        id: '',
        name: '',
        email: '',
        joined: ''
    }
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
        console.log(cat)
    }

    loadRegion = (region) => {
        this.setState({
            region: region
        })
        console.log('まさかの　', this.state.region)
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

  render() {
      const { isSignedIn, route} = this.state;
    return (
        <div className="App">
            {/*<Router>*/}
                {/*<Fragment>*/}
                    {/*<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>*/}
                    {/*<Route exact path="/" component={ Fui } />*/}
                    {/*<section className="container">*/}
                        {/*<Switch>*/}
                            {/*<Route exact path='/form' component={ Form }/>*/}
                        {/*</Switch>*/}
                    {/*</section>*/}
                {/*</Fragment>*/}
            {/*</Router>*/}

            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { route === 'home' || route === '/'
                ? <div>
                    < FUI route={this.state.route} loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} category={this.state.category} region={this.state.region}/>
                </div>
                :(
                    // route === 'category'
                    //     ?< Category loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} region={this.state.region}/>
                    //     :(
                    //         route === 'infos'
                    //             ?< Infos route={this.state.route} loadUser={this.loadUser}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} category={this.state.category} region={this.state.region}/>
                    //             :(
                                    route === 'thankyou'
                                        ?< Thankyou onRouteChange={this.onRouteChange} />
                                        :(
                                            route === 'iine'
                                                ?< Iine onRouteChange={this.onRouteChange} />
                                                :(
                                                    route === 'waruiine'
                                                        ?< Waruiine onRouteChange={this.onRouteChange} />
                                                        :(
                                                            route === 'loading'
                                                                ?< Loading onRouteChange={this.onRouteChange} />
                                                                    :(
                                                                        route === 'back'
                                                                            ?< GUIforBack onRouteChange={this.onRouteChange} />
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
                                                                                                            ?< Touroku onRouteChange={this.onRouteChange} />
                                                                                                            :(
                                                                                                                route === 'signin'
                                                                                                                    ?< SignIn onRouteChange={this.onRouteChange} />
                                                                                                                    :(
                                                                                                                        route === 'backMaster'
                                                                                                                            ?< GUIforMaster onRouteChange={this.onRouteChange} />
                                                                                                                            :(
                                                                                                                                route === 'mistake'
                                                                                                                                    ?< Mistake onRouteChange={this.onRouteChange} />
                                                                                                                                    :(
                                                                                                                                        route === 'thankyouBM'
                                                                                                                                            ?< ThankyouBM onRouteChange={this.onRouteChange} />
                                                                                                                                            :(
                                                                                                                                                route === 'sui'
                                                                                                                                                    ?< SUI onRouteChange={this.onRouteChange} route={this.state.route} loadUser={this.loadUser} loadCategory={this.loadCategory} loadRegion={this.loadRegion} category={this.state.category} region={this.state.region}/>
                                                                                                                                                    :(
                                                                                                                                                        < Form route={this.state.route} loadUser={this.loadUser}  onRouteChange={this.onRouteChange} onInputChange={this.onInputChange} />
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
    );
  }
}

export default App;
