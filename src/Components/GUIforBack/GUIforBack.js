import React from 'react';
import CardList from './CardLIstForB'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";


class GUIforBack extends React.Component {
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
        if (this.props.route === 'back'|| 'backMaster') {
            this.props.onRouteChange('thankyoub');
        }
    }

    //waruiine
    onButtonSubmitW = (id) => {
        if (this.props.route === 'back'|| 'backMaster') {
            this.props.onRouteChange('thankyoub');
        }
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
            this.props.onRouteChange('thankyoub');

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
            this.props.onRouteChange('thankyoub');
    }


    //comments
    onSubmitForm =(id, com) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'back') {
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

    //GUI for Backend changeComments
    onSubmitFormBackComments =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'back') {
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
                        this.props.onRouteChange('thankyoub');
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
            if (this.props.route === 'back') {
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
                        this.props.onRouteChange('thankyoub');
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
            if (this.props.route === 'back') {
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
                        this.props.onRouteChange('thankyoub');
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
            if (this.props.route === 'back') {
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
                        this.props.onRouteChange('thankyoub');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })
        }
    }

    //changePrice
    onSubmitFormBackPrice =(id) => {
            console.log('textB のナカは ', this.state.textB)
            this.props.onRouteChange('loading');
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
                        this.props.onRouteChange('thankyoub');
                    } else if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                })

    }


    // Search box
    onSearchChange = (event) => { //whenever it gets changed
        this.setState({searchfield: event.target.value}) //update "serachfiled is event.target.value"
    }



    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) // ワンチャン || でよくね？
        })
        // const child = { width: `30em`, height: `100%`}
        // const parent = { width: `60em`, height: `100%`}
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
        else {
            return (
                <div className="tc ">

                    <div className=" ">
                        <label className="fl pv4 ph1 w-100 w-100-ns tc db fw6 lh-copy f3"><i className="fas fa-thumbs-down"></i>{' '}オフィサー用のページ</label>
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
                        <button onClick={() => this.props.onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">シェアする</button>
                        <button onClick={() => this.props.onRouteChange('/')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">ホームに戻る</button>
                    </div>
                </div>
            );
        }
    }
}


export default GUIforBack;