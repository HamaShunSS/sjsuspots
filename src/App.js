import React, { Component } from 'react';
import './App.css';
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



const initialState = {
    category: '',
    region: '',
    route: 'home',
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

    loadRegion = (region ) => {
        this.setState({
            region: region
        })
        console.log(region)
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

  render() {
      const { isSignedIn, route} = this.state;
    return (
        <div className="App">
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { route === 'home' || route === 'firstpage'
                ? <div>
                    < FirstPage loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion}/>
                </div>
                :(
                    route === 'category'
                        ?< Category loadUser={this.loadUser} onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} loadRegion={this.loadRegion} region={this.state.region}/>
                        :(
                            route === 'infos'
                                ?< Infos route={this.state.route} loadUser={this.loadUser}  onRouteChange={this.onRouteChange} loadCategory={this.loadCategory} category={this.state.category} region={this.state.region}/>
                                :(
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
                                                                        route === 'sorry'
                                                                            ?< Sorry onRouteChange={this.onRouteChange} />
                                                                                :(
                                                                                    route === 'nodata'
                                                                                    ?< NoData onRouteChange={this.onRouteChange} />
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
            }
            <Contact isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        </div>
    );
  }
}

export default App;
