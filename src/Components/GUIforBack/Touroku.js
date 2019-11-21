import React, { Component } from "react";


class Touroku extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            email:'',
            password: ''
        };
        // console.log(this.state.checkboxes)
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value}) // updated signInEmail from <input />
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value}) // updated signInEmail from <input />
    }

    onSubmitForm =() => {
        if (this.state.email === '' || this.state.password === '' ) {
            alert("You forgot to type email or password..");
        } else {
                if (this.props.route === 'touroku') {
                    this.props.onRouteChange('loading');
                }
                console.log('email は　', this.state.email)
                fetch('https://spots-for-sjsu-students.herokuapp.com/touroku', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ // Send email and password updated at "onEmailChange" and "onPasswordChange" to the database through JSON.stringify
                        email: this.state.email,
                        password: this.state.password
                    })
                })
                    .then(response => response.json()) // Get response through json, and get data by ".then"
                    .then(response => {
                        console.log('what is ', response)
                        if (response === 'success') {
                            this.props.onRouteChange('back');
                        } else if (response === 'incorrect form submission') {
                            this.props.onRouteChange('sorry');
                        }
                    })
            }
        }

    render(){
        return (
            <main className="pa4 ">
                <div className="tc fl w-100 w-100-ns tc mb7">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns ">
                        <div className="db f2-ns f6 pv5-ns pv4 fl w-100 w-100-ns tc fw6 ph0 mh0">新規登録</div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">email</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="email"
                                id="email"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6" htmlFor="name">password</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>


                    <div className="pv5-ns pv3">
                        <input
                            onClick={this.onSubmitForm}
                            className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6"
                            type="submit"
                            value="Register"
                        />
                    </div>
                    <button onClick={() => this.props.onRouteChange('backMaster')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">マスターページに戻る</button>
                </div>
            </main>

        );
    }

}

export default Touroku;