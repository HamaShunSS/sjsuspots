import React, { Component }  from 'react';
import CardList from './InfosCardList'; //child
import CardListR from './InfosCardListR'; //child
import Scroll from '../Scroll';
import ScrollMini from '../ScrollMini';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";
import SearchBoxRegion from "../SearchBox/SearchBoxRegion";




class FUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
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
        fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
    }

    // iine
    onButtonSubmit = (id) => {
        console.log('アイディー', id)
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
                    console.log('iine のなかは',count)
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
                        console.log('what is ', response)
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
        console.log('searchfieldRegion は', this.state.searchfieldRegion)
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

        const filterdRegions = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.region.toLowerCase().includes(this.state.searchfieldRegion.toLowerCase())
        })



        if (this.state.results.length === 0) {
            return <div className="pt6 pt6-ns">
                <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                <div className="ph6-ns tc center pb5-ns">
                    <div className="ph6 ph7-ns tc center pb6">
                        <Spinner class='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
                    </div>
                    <p className="pv7 pv7-ns"> </p>
                    <p className="pv7-ns"> </p>
                </div>
            </div>

        }
        if (this.state.results.length === 0){

        }
        else {
            return (
                <div className="tc">
                    <div className=" ">
                        <label className="fl pv4-ns f3 pv3 w-100 w-100-ns tc db fw6 lh-copy f2-ns"><i className="fas fa-thumbs-down"></i>{' '}リコット</label>
                    </div>
                    {/*<div class="fl w-100 w50-ns bg-dark">*/}
                        {/*<div class="fl w-50 w-35-ns" >*/}
                            {/*<SearchBoxRegion onSearchChangeRegion={this.onSearchChangeRegion}/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<ScrollMini class="fl w-50 w-15-ns">*/}
                                {/*<CardListR infos={filterdRegions}/>*/}
                            {/*</ScrollMini>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className='ma0 tl fl w-100 w50-ns pb3'>
                        <ul className="ddmenu">
                            <li className='ttll fl w-50-ns w-100'><a href="#">場所を選択して下さい：　{this.bashoDisplay()}</a>
                                <ul className='ttll'>
                                    <li className='' onClick={() => this.setState({searchfield: ''})}>All Regions</li>
                                    <li><p onClick={() => this.setState({searchfield: 'San Jose'})}>San Jose</p></li>
                                    <li onClick={() => this.setState({searchfield: 'San Francisco'})}>San Francisco</li>
                                    <li onClick={() => this.setState({searchfield: 'Santa Cruz'})}>Santa Cruz</li>
                                    <li onClick={() => this.setState({searchfield: 'Berkeley'})}>Berkeley</li>
                                    <li onClick={() => this.setState({searchfield: 'Monterey'})}>Monterey</li>
                                </ul>
                            </li>
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
                    <Scroll>
                        <CardList infos={filterdInfos}　onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </Scroll>
                    <div className="tc">
                        <button onClick={() => this.props.onRouteChange('form')} className="b tc ph3 pv2 ma3 btn-outline-light-green input-reset bg-light-green white br-pill grow pointer f6">シェアしてみる</button>
                    </div>
                    <div className='pv6-ns'>

                    </div>
                </div>
            );
        }
    }
}


export default FUI;