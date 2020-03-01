import React from 'react';
import CardList from './CardList'; //child
import Scroll from '../Scroll';
import Spinner from 'react-spinner-material';
import Detail from "./Detail";
// import SearchBox from "../SearchBox/SearchBox";
// import CardListU from './CardListUsersB'; //child


class Mypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], //必要
            users: [],
            detail:'',
            spot: null,
            userid: this.props.userid,
            item:'',
            iine:'',
            waruiine:'',
            com:'',
            tobad:'',
            textB:'',
            searchfield:'',
            searchfieldRegion:'',
            region:'',
            email:''
        };

    }

    onCommentsChange = (event) => {
        this.setState({com: event.target.value}) // updated signInEmail from <input />
    }

    // For Back
    onCommentsChangeB = (event) => {
        this.setState({textB: event.target.value}) // updated signInEmail from <input />
    }

    toCommentBad = (event) => {
        this.setState({tobad: event}) // updated signInEmail from <input />
    }





    componentDidMount() {
        fetch('https://spots-for-sjsu-students.herokuapp.com/sharedInfo',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: this.props.userid
                })
            })
            .then(response => response.json())
            .then(informations => this.setState({results: informations})
            );
        fetch('https://spots-for-sjsu-students.herokuapp.com/allUsers')
            .then(response => response.json())
            .then(users => this.setState({users: users})
            );
    }

    //Authentic fetch
    onButtonSubmitAuthentic = (id, arrayA) => {
        console.log(arrayA)
        const stringifiedAuth = arrayA.join(',');
        console.log(stringifiedAuth);
        fetch('https://spots-for-sjsu-students.herokuapp.com/authenticButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    stringifiedAuth: stringifiedAuth
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.onRouteChange('iine');
        }
    }

    //NotAuthentic fetch
    onButtonSubmitNotAuthentic = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/notauthenticButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.onRouteChange('iine');
        }
    }

    //Good fetch
    onButtonSubmitGood = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/goodButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.onRouteChange('iine');
        }
    }

    //Bad fetch
    onButtonSubmitBad = (id, array) => {
        console.log(array)
        const strings = array.join(',');
        console.log(strings);
        fetch('https://spots-for-sjsu-students.herokuapp.com/badButton',
            { //fetch connects frontend with the server
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    strings: strings
                })
            })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(res => {
                if (res === 'success') {
                    console.log(res)
                }
            })
        if (this.props.route === '/' || 'secondUI') {
            this.props.onRouteChange('iine');
        }
    }

    onSpotIdChange = (spot) => {
        this.setState({
            spot: spot,
            detail: 'yes'
        });
    }


    //comments
    onAddComment =(id, com) => {
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

    onAddBadComment =(id, com) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'secondUI') {
                this.props.onRouteChange('loading');
            }
            console.log('com のナカは ', this.state.com)
            fetch('https://spots-for-sjsu-students.herokuapp.com/addbadcomment', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    com: this.state.com,
                    originalComments: com,
                    userid: this.props.userId,
                    username: this.props.username,
                    country: this.props.usercountry
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
    onCommentChange =(id) => {
        if (this.state.com === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.com)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeComments', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newComments: this.state.com,
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



    onDeleteSpot =(id) => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/deleteSpot', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                id: id
            })
        })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(response => {
                console.log('what is ', response)
                this.props.onRouteChange('thankyouBM');
            })
    }

    onDeleteUser =(id) => {
        fetch('https://spots-for-sjsu-students.herokuapp.com/deleteUser', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                id: id
            })
        })
            .then(response => response.json()) // Get response through json, and get data by ".then"
            .then(response => {
                console.log('what is ', response)
                this.props.onRouteChange('thankyouBM');
            })
    }



    //Data for spots
    onSubmitFormBackUserName =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeUserN', {
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
    //Data for spots
    onSubmitFormBackCountry =(id, country) => {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('country change', id, country)
            // fetch('https://spots-for-sjsu-students.herokuapp.com/changeC', {
            //     method: 'put',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
            //         id: id,
            //         newComments: country,
            //     })
            // })
            //     .then(response => response.json()) // Get response through json, and get data by ".then"
            //     .then(response => {
            //         console.log('what is ', response)
            //         if (response === 'success') {
            //             this.props.onRouteChange('thankyouBM');
            //         } else if (response === 'incorrect form submission') {
            //             this.props.onRouteChange('sorry');
            //         }
            //     })

    }




    //changeUserName for login database
    onSubmitBackUserName =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeUserName', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newUserName: this.state.textB,
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

    onSubmitBackStatus =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeStatus', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newStatus: this.state.textB,
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

    //changeEmail
    onSubmitBackEmail =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeEmail', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newEmail: this.state.textB,
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

    //changeCountry
    onSubmitBackCountry =(id) => {
        if (this.state.textB === '' ) {
            alert("コメントを記入してください...");
        } else {
            if (this.props.route === 'backMaster') {
                this.props.onRouteChange('loading');
            }
            console.log('textB のナカは ', this.state.textB)
            fetch('https://spots-for-sjsu-students.herokuapp.com/changeCountry', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                    id: id,
                    newCountry: this.state.textB,
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



    // Search box
    onSearchChange = (event) => { //whenever it gets changed
        this.setState({searchfield: event.target.value}) //update "serachfiled is event.target.value"
    }

    render() {
        const filterdInfos = this.state.results.filter(infos => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return infos.userid
        })
        const filterdUsers = this.state.users.filter(users => {
            //"filter" is a function to go thorough array in "robots from State", having a parameter "robot"
            return users
        })

        //Auth変えるやつ
        const changeAuthentic = (id, authentic) =>{
            const arrayedAuth = authentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userid), this.state.userid)
            if (arrayedReal.indexOf(this.state.userid) === -1) {
                return (arrayedReal.push(this.state.userid), this.onButtonSubmitAuthentic(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userid), 1), this.onButtonSubmitAuthentic(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //NotAuth変えるやつ
        const changeNotAuthentic = (id, Notauthentic) =>{
            const arrayedAuth = Notauthentic.split(',')
            const arrayedReal = arrayedAuth.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userid), this.state.userid)
            if (arrayedReal.indexOf(this.state.userid) === -1) {
                return (arrayedReal.push(this.state.userid), this.onButtonSubmitNotAuthentic(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userid), 1), this.onButtonSubmitNotAuthentic(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //Good変えるやつ
        const changeGood = (id, good) =>{
            const array = good.split(',')
            const arrayedReal = array.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userid), this.state.userid)
            if (arrayedReal.indexOf(this.state.userid) === -1) {
                return (arrayedReal.push(this.state.userid), this.onButtonSubmitGood(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userid), 1), this.onButtonSubmitGood(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        //Bad変えるやつ
        const changeBad = (id, event) =>{
            const array = event.split(',')
            const arrayedReal = array.map(str => parseInt(str, 10));
            console.log(arrayedReal.indexOf(this.state.userid), this.state.userid)
            if (arrayedReal.indexOf(this.state.userid) === -1) {
                return (arrayedReal.push(this.state.userid), this.onButtonSubmitBad(id, arrayedReal))
            } else {
                return (arrayedReal.splice(arrayedReal.indexOf(this.state.userid), 1), this.onButtonSubmitBad(id, arrayedReal)) //indexOf = idの位置のインデックス番号, から一つ削除
            }
        }

        const onSpotIdChange = (spot) => {
            console.log(spot)
            this.setState({
                detail: 'yes'
            });
            return(spot)
        }


        if (this.state.detail === 'yes'){
            return (
                <div>
                    <div className=" w-100 w-100-ns mv2">
                        <label className="pv4-ns f3 pt3 pv2 fw6 f2-ns mh2">Shared info</label>
                        <button className='ph3-ns pv2-ns pv1 ph2 ml4 btnSS b white br-pill pointer' onClick={() => {this.setState({detail: 'no'})}}><p className='fl f6'>Back</p></button>
                    </div>
                    <Detail
                        info={this.state.spot}
                        userid={this.props.userid}
                        usercountry={this.props.usercountry}
                        onSubmitFormBackCountry={this.onSubmitFormBackCountry}
                        onCommentChange={this.onCommentChange}
                        onDeleteSpot={this.onDeleteSpot}
                        changeAuthentic={changeAuthentic}
                        changeNotAuthentic={changeNotAuthentic}
                        changeGood={changeGood}
                        changeBad={changeBad}
                        authentic={this.state.authentic}
                        onRouteChange={this.props.onRouteChange}
                        onSpotIdChange={this.onSpotIdChange}
                        onAddComment={this.onAddComment}
                        onCommentsChange={this.onCommentsChange}
                        onAddBadComment={this.onAddBadComment}
                        toCommentBad={this.toCommentBad}
                        tobad={this.state.tobad}
                    />
                </div>
            )
        }
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

                    <div className="">
                        <label className="pv3 fl ph1 w-100 w-100-ns tc db fw6 lh-copy f3">{this.props.username}'s page</label>
                    </div>
                    {/*<SearchBox onSearchChange={this.onSearchChange}/>*/}
                    <Scroll>
                        <CardList infos={filterdInfos}
                                  onSpotIdChange={this.onSpotIdChange}
                                  onCommentChange={this.onCommentChange}
                                  onCommentsChangeB={this.onCommentsChangeB}
                                  onDeleteSpot={this.onDeleteSpot}
                                  onSubmitFormBackCountry={this.onSubmitFormBackCountry}
                                  email={this.props.email}
                                  status={this.props.status}
                                  onSubmitFormBackUserName={this.onSubmitFormBackUserName}
                        />
                    </Scroll>
                    {/*<div className="mv4">*/}
                        {/*<h3 className="mv2">*/}
                            {/*Users*/}
                        {/*</h3>*/}
                    {/*</div>*/}
                    {/*<Scroll>*/}
                        {/*<CardListU*/}
                            {/*users={filterdUsers}*/}
                            {/*onCommentsChangeB={this.onCommentsChangeB}*/}
                            {/*onDeleteUser={this.onDeleteUser}*/}
                            {/*email={this.props.email}*/}
                            {/*status={this.props.status}*/}

                            {/*onSubmitBackUserName={this.onSubmitBackUserName }*/}
                            {/*onSubmitBackStatus={this.onSubmitBackStatus}*/}
                            {/*onSubmitBackEmail={this.onSubmitBackEmail}*/}
                            {/*onSubmitBackCountry={this.onSubmitBackCountry}*/}


                        {/*/>*/}
                    {/*</Scroll>*/}
                    {/*<div className="tc pb6">*/}
                        {/*<button onClick={() => this.props.onRouteChange('touroku')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">新規ユーザー登録</button>*/}
                        {/*<button onClick={() => this.props.onRouteChange('back')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">オフィサー用ページに行く</button>*/}
                    {/*</div>*/}
                </div>
            );
        }
    }
}


export default Mypage;