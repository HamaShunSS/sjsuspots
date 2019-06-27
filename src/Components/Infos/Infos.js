import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";


class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            item:'',
            iine:'',
            waruiine:'',
            comments:'',
            searchfield:''
        };

    }

    onCommentsChange = (event) => {
        this.setState({comments: event.target.value}) // updated signInEmail from <input />
    }


    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/places',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    category: this.props.category, // カテゴリーは List => App => Infos で来ている
                    reg: this.props.region
                })
            })
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
    }

    // iine
    onButtonSubmit = (id) => {
        console.log('アイディー', id)
        if (this.props.route === 'infos') {
            this.props.onRouteChange('iine');
        }
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
    }

    //waruiine

    onButtonSubmitW = (id) => {
        if (this.props.route === 'infos') {
            this.props.onRouteChange('waruiine');
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

    //comments

    onSubmitForm =(id) => {
        if (this.state.comments === '' ) {
            alert("コメントを記入してください...");
        } else {
                if (this.props.route === 'infos') {
                    this.props.onRouteChange('loading');
                }
                console.log('com no naka ha ',this.state.comments)
                fetch('https://spots-for-sjsu-students.herokuapp.com/addcomments', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                        id: id,
                        com: this.state.comments
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

    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
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
                <div className="tc">
                    <div className="pv4 pb4-ns">
                        <label className="fl pv4 w-100 w-100-ns tc db fw6 lh-copy f2"><i className="fas fa-thumbs-down"></i>{' '}オススメの場所です</label>
                    </div>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList infos={filterdInfos}　onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </Scroll>
                    <div className="tc">
                        <button onClick={() => this.props.onRouteChange('category')} className="tc b ph3 pv3 ma3 input-reset ba bg-light-green white br-pill grow pointer f6 dib">カテゴリーに戻る</button>
                        <button onClick={() => this.props.onRouteChange('home')} className="tc b ph3 pv3 ma3 input-reset ba bg-light-green white br-pill grow pointer f6 dib">ホームに戻る</button>
                    </div>
                </div>
            );
        }
    }
}


export default Infos;