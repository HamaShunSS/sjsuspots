import React, { Component }  from 'react';
import CardList from './CardLIstForB'; //child
import CardListR from '../FUI/InfosCardListR'; //child
import Scroll from '../Scroll';
import ScrollMini from '../ScrollMini';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";
import SearchBoxRegion from "../SearchBox/SearchBoxRegion";


class GUIforMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            item:'',
            iine:'',
            waruiine:'',
            com:'',
            textB:'',
            searchfield:'',
            searchfieldRegion:'',
            region:''
        };

    }

    onCommentsChange = (event) => {
        this.setState({com: event.target.value}) // updated signInEmail from <input />
    }

    // For Back
    onCommentsChangeB = (event) => {
        this.setState({textB: event.target.value}) // updated signInEmail from <input />
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
            this.props.onRouteChange('thankyouBM');
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
            this.props.onRouteChange('thankyouBM');
    }

    // iine減らす
    onButtonSubmitD = (id) => {
        console.log('アイディー', id)
        fetch('https://spots-for-sjsu-students.herokuapp.com/buttonD',
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
            this.props.onRouteChange('thankyouBM');
    }

    //waruiine減らす
    onButtonSubmitWD = (id) => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/buttonWD',
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
            this.props.onRouteChange('thankyouBM');
    }


    //comments
    onSubmitForm =(id, com) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
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
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //GUI for Backend changeComments
    onSubmitFormBackComments =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeComments', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.textB,
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //changeURL
    onSubmitFormBackURL =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeURL', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.textB,
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //changeName
    onSubmitFormBackName =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeName', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.textB,
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //changeLocation
    onSubmitFormBackLocation =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeLocation', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.textB,
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //changePrice
    onSubmitFormBackPrice =(id) => {
            this.props.onRouteChange('loading');
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changePrice', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.textB,
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'success') {
                        this.props.onRouteChange('thankyouBM');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })

    }


    // Search box
    onSearchChange = (event) => { //whenever it gets changed
        this.setState({searchfield: event.target.value}) //update "serachfiled is event.target.value"
    }
    // Search box for region
    onSearchChangeRegion = (event) => { //whenever it gets changed
        this.setState({searchfieldRegion: event.target.value}) //update "serachfiledRegion is event.target.value"
    }

    handleRegionChange = changeEvent => {
        this.setState({
            region: changeEvent.target.value
        });
        console.log('region は　', this.state.region)
    };

    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) // ワンチャン || でよくね？
        })
        // const child = { width: `30em`, height: `100%`}
        // const parent = { width: `60em`, height: `100%`}

        const filterdRegions = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.region.toLowerCase().includes(this.state.searchfieldRegion.toLowerCase())
        })
        if (this.state.results.length === 0) {
            return <div className="pt6 pt6-ns">
                <button onClick={() => this.props.onRouteChange('category')} className="tc b ph3 pv3 ma3 input-reset ba bg-light-green white br-pill grow pointer f6 dib">カテゴリーに戻る</button>
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
                <div className="tc ">
                    <div class="fl w-75 w-40-ns bg-dark">
                        <SearchBoxRegion onSearchChangeRegion={this.onSearchChangeRegion}/>
                    </div>
                    <div class="fl w-25 w-10-ns ">
                        <ScrollMini>
                            <CardListR infos={filterdRegions}/>
                        </ScrollMini>
                    </div>

                    <div className=" ">
                        <label className="fl pv4-ns w-100 w-100-ns tc db fw6 lh-copy f2"><i className="fas fa-thumbs-down"></i>{' '}The Page for the Master</label>
                    </div>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList infos={filterdInfos}
                                  onButtonSubmit={this.onButtonSubmit}
                                  onButtonSubmitW={this.onButtonSubmitW}
                                  onButtonSubmitD={this.onButtonSubmitD}
                                  onButtonSubmitWD={this.onButtonSubmitWD}
                                  onSubmitFormBackComments={this.onSubmitFormBackComments}
                                  onSubmitFormBackURL={this.onSubmitFormBackURL}
                                  onSubmitFormBackName={this.onSubmitFormBackName}
                                  onSubmitFormBackLocation={this.onSubmitFormBackLocation}
                                  onSubmitFormBackPrice={this.onSubmitFormBackPrice}
                                  onCommentsChange={this.onCommentsChange}
                                  onCommentsChangeB={this.onCommentsChangeB} />
                    </Scroll>
                    <div className="tc">
                        <button onClick={() => this.props.onRouteChange('touroku')} className="tc btn b ph3 pv2 ma3 input-reset ba bg-light-green white br-pill grow pointer f6 dib">新規ユーザー登録</button>
                        <button onClick={() => this.props.onRouteChange('back')} className="tc btn b ph3 pv2 ma3 input-reset ba bg-light-green white br-pill grow pointer f6 dib">オフィサー用ページに行く</button>
                    </div>
                </div>
            );
        }
    }
}


export default GUIforMaster;