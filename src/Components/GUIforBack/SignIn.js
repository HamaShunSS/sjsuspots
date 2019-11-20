import React, { Component } from "react";

class SignIn extends Component {
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
            fetch('https://spots-for-sjsu-students.herokuapp.com/signin', {
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
                    if (response === 'recotto.afo@gmail.com') {
                        this.props.onRouteChange('backMaster');
                    } else if (response === 'so.cal@gmail.com') {
                        this.props.onRouteChange('back');
                    } else {
                        this.props.onRouteChange('mistake');
                    }
                })
        }
    }

    render(){
        return (
            <main className="pa4">
                <div className="tc fl w-100 w-100-ns tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns ">
                        <div className="db f2-ns f3 pv5-ns pv4 fl w-100 w-100-ns tc fw6 ph0 mh0">Officer login</div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6 pt2" htmlFor="name">email</label>
                            <input
                                placeholder=""
                                className='pa2-ns pa2 input-reset hover-white br-pill w-100 w-70-ns btnSS b ba b--white pointer white f6'
                                type="text"
                                name="email"
                                id="email"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="pt4">
                            <label className="db fw6 lh-copy f6" htmlFor="name">password</label>
                            <input
                                className='pa2-ns pa2 input-reset hover-white br-pill w-100 w-70-ns btnSS b ba b--white pointer white f6'
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>


                    <div className="pv5-ns pv3">
                        <input
                            onClick={this.onSubmitForm}
                            className="btn b ph3-ns pv2-ns pa2  ba bg-white-10  white br-pill grow pointer f6"
                            type="submit"
                            value="Log in"
                        />
                    </div>
                    <div className='pv7-ns pv6'>

                    </div>
                </div>
            </main>

        );
    }

}

export default SignIn;