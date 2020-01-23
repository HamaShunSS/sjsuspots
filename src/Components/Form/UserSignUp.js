import React, { Component } from "react";


class UserSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            country: '',
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

    onUserNameChange = (event) => {
        this.setState({username: event.target.value}) // updated signInEmail from <input />
    }

    onCountryChange = (event) => {
        this.setState({country: event.target.value}) // updated signInEmail from <input />
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
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    country: this.state.country,
                    status: 'user'
                })
            })
                .then(response => response.json()) // Get response through json, and get data by ".then"
                .then(response => {
                    console.log('what is ', response)
                    if (response === 'incorrect form submission') {
                        this.props.onRouteChange('sorry');
                    }
                    this.props.onIsSignedInChange(response.username);
                    this.props.onRouteChange('form');
                })
        }
    }

    render(){
        return (
            <main className="pa4 ">
                <div className="tc fl w-100 w-100-ns tc mb7">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns ">
                        <div className="db f2-ns f3 pv5-ns pv4 fl w-100 w-100-ns tc fw6 ph0 mh0">User Registration</div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">User Name</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="User Name"
                                id="username"
                                onChange={this.onUserNameChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">Email</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="email"
                                id="email"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Password</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">Which country are you from?</label>
                            <input
                                className="pa2-ns pa1 input-reset bg-white hover-bg-black hover-white br-pill w-100 w-50-ns"
                                type="text"
                                name="country"
                                id="country"
                                onChange={this.onCountryChange}
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
                    <button onClick={() => this.props.onRouteChange('userLogIn')} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6">Back to the Login page</button>
                </div>
            </main>

        );
    }

}

export default UserSignUp;