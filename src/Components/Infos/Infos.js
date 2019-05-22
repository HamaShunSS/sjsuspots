import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';


class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            item:'',
            iine:'',
            waruiine:'',
            comments:'',
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
        console.log('results is ',this.state.results);
        console.log('props is ',this.props);
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
    }

    //waruiine

    onButtonSubmitW = (id) => {
        console.log('アイディー', id)
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


    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos
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
        } else {
            return (
                <div className="tc">
                    <div className="pv4 pb4-ns">
                        <label className="fl pv4 w-100 w-100-ns tc db fw6 lh-copy f2">オススメの場所です</label>
                    </div>
                    <Scroll>
                        <CardList infos={filterdInfos}　onButtonSubmit={this.onButtonSubmit} onButtonSubmitW={this.onButtonSubmitW} onSubmitForm={this.onSubmitForm} onCommentsChange={this.onCommentsChange}/>
                    </Scroll>
                    <div className="center">
                        <div onClick={() => this.props.onRouteChange('category')} className="fl b tc center ph1 pv3 ma2 grow pointer f4 f4-ns dib"><p className="ph3 pv3 bg-light-green white br-pill grow">カテゴリーに戻る</p></div>
                        <div onClick={() => this.props.onRouteChange('home')} className="fl b tc center ph1 pv3 ma2 grow pointer f4 f4-ns dib"><p className="ph3 pv3 bg-light-green white br-pill grow">ホームに戻る</p></div>
                    </div>
                </div>
            );
        }
    }
}


export default Infos;