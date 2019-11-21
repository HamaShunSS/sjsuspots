import React from 'react';
import CardList from './InfosCardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import SearchBox from "../SearchBox/SearchBox";





class SUI extends React.Component {
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
        fetch('https://spots-for-sjsu-students.herokuapp.com/sui',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    region: this.props.region, // カテゴリーは List => App => FUI で来ている
                })
            })
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
    }

    // componentDidMount() {
    //     fetch('https://spots-for-sjsu-students.herokuapp.com/allData')
    //         .then(response => response.json())
    //         .then(informations => this.setState({results: informations})
    //         );
    // }

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
        if (this.props.route === '/' || 'sui') {
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
        if (this.props.route === '/' || 'sui') {
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
    // // Search box for region
    // onSearchChangeRegion = (reg) => { //whenever it gets changed
    //     this.setState({searchfieldRegion: reg.target.value}) //update "serachfiledRegion is event.target.value"
    //     console.log('searchfieldRegion は', this.state.searchfieldRegion)
    // }

    categoryDisplay = () => {
        if (this.state.searchfield === '') {
            return 'All Categories'
        }　else
            return this.state.searchfield
    }


    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return (
                infos.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                infos.category.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                infos.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })
        // const child = { width: `30em`, height: `100%`}
        // const parent = { width: `60em`, height: `100%`}




        if (this.state.results.length === 0) {
            return <div className="">

                <div className=" ">
                    <label className="fl pv4-ns f3 pv3 w-100 w-100-ns tc db fw6 lh-copy f2-ns"><i className="fas fa-thumbs-down"></i>{' '}リコット</label>
                </div>
                <div className='ma0 fl w-100 w50-ns pb7-ns pb6'>
                    <button className='tc ph3-ns pv2-ns pa2 btnSS b white br-pill pointer ' onClick={() => this.props.onRouteChange('/')}><p className='fl f6'>場所選びに戻る</p></button>
                </div>

                <Scroll>
                    <div className="pv4-ns"><h1 className='pv4 pv4-ns'>Loading...</h1></div>
                    <div className="ph6-ns tc center pb5-ns">
                        <div className="ph6 ph7-ns tc center pb6">
                            <Spinner class='justify-center pb6 pb6-ns' size={80} spinnerColor={"white"} spinnerWidth={8} visible={true} />
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
                    <div className=" ">
                        <label className="pv4-ns f3 pv3 w-100 w-100-ns tc db fw6 lh-copy f2-ns">{this.state.results[0].region}</label>
                    </div>
                    <div className='ma1 tc pb2'>
                        <ul className="ddmenu ">
                            <button className='tc ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer mr4 mr6-ns'>
                                <li className='ttll f6 fl'>カテゴリー：　{this.categoryDisplay()}
                                    <ul className='ttll'>
                                        <li className='pa1 b' onClick={() => this.setState({searchfield: ''})}>All Categories</li>
                                        <li><p className='pa1 b' onClick={() => this.setState({searchfield: 'Restaurants'})}>レストラン</p></li>
                                        <li className='pa1 b' onClick={() => this.setState({searchfield: 'Cafes'})}>カフェ</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Bars'})}>バー</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Clubs'})}>クラブ</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Nature'})}>自然</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Parks'})}>公園</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Amusement'})}>アミューズメント</li>
                                        <li className='b pa1' onClick={() => this.setState({searchfield: 'Salons'})}>サロン</li>
                                    </ul>
                                </li>
                            </button>
                            <button className='tc ph3-ns pv2-ns pv1 ph2 btnSS b white br-pill pointer' onClick={() => this.props.onRouteChange('/')}><p className='fl f6'>エリアに戻る</p></button>
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
                        <button onClick={() => this.props.onRouteChange('form')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">シェアしてみる</button>
                    </div>
                    <div className='pv6-ns mb3'>

                    </div>
                </div>
            );
        }
    }
}


export default SUI;