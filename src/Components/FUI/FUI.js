import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";





class FUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            userInfo: '',
            item:'',
            iine:'',
            waruiine:'',
            com:'',
            searchfield:'',
            searchfieldRegion:'',
            region:''
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
            fetch('https://spots-for-sjsu-students.herokuapp.com/profile/:id')
                .then(response => response.json())
                .then(informations => this.setState({userInfo: informations})
                );
        }
            fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
                .then(response => response.json())
                .then(informations => this.setState({results: informations})
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
    // Search box for region
    onSearchChangeRegion = (reg) => { //whenever it gets changed
        this.setState({searchfieldRegion: reg.target.value}) //update "serachfiledRegion is event.target.value"
    }

    bashoDisplay = () => {
        if (this.state.searchfield === '') {
            return 'All Regions'
        }　else
            return this.state.searchfield
    }



    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return (
                infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                infos.region.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
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
                <div className="tc w-100 w-100-ns">
                        <div>
                        <label className="w-100 w-100-ns pv4-ns f3 pv3 tc db fw6 lh-copy f2-ns">リコット</label>
                    </div>
                    <div className='ma0 w50-ns pb2 ml3'>
                            <ul className="ddmenu tl tc-ns ">
                                <button className='tc ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer'>
                                    <li className='ttll fl f6'>Nearby：　{this.bashoDisplay()}
                                        <ul className='ttll'>
                                            <li className='pa1 b link' onClick={() => this.setState({searchfield: ''})}>All Regions</li>
                                            <li className='pa1 b link' onClick={() => {this.props.loadRegion('San Jose'); this.props.onRouteChange('sui')}}>San Jose</li>
                                            <li className='pa1 b link' onClick={() =>{this.props.loadRegion('San Francisco'); this.props.onRouteChange('sui')}}>San Francisco</li>
                                            <li className='b pa1' onClick={() =>{this.props.loadRegion('Santa Cruz'); this.props.onRouteChange('sui')}}>Santa Cruz</li>
                                            {/*<li className='b pa1' onClick={() =>{this.props.loadRegion('Berkeley'); this.props.onRouteChange('sui')}}>Berkeley</li>*/}
                                            <li className='b pa1' onClick={() =>{this.props.loadRegion('Monterey'); this.props.onRouteChange('sui')}}>Monterey</li>
                                            {/*<li className='b pa1' onClick={() =>{this.props.loadRegion('San Luis Obispo'); this.props.onRouteChange('sui')}}>San Luis Obispo</li>*/}
                                        </ul>
                                    </li>
                                </button>

                                {/*<li className='fl w-50 w25-ns' ><a href="#">製品・技術</a>*/}
                                {/*<ul>*/}
                                {/*<li><a href="#">ハードウェア</a></li>*/}
                                {/*<li><a href="#">ソフトウェア</a></li>*/}
                                {/*<li><a href="#">ウェブサービス</a></li>*/}
                                {/*</ul>*/}
                                {/*</li>*/}
                            </ul>
                    </div>


                    <SearchBox onSearchChange={this.onSearchChange}/>
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