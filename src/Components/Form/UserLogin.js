import React, { Component } from "react";
import UserSignUp from "../../App";
import {Link, Redirect} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Mistake from "../GUIforBack/Mistake";

class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            email:'',
            password: '',
            link:'',
        };
        // console.log(this.state.checkboxes)
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value}) // updated signInEmail from <input />
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value}) // updated signInEmail from <input />
    }

    changer = (res) => {
        console.log('レス2　', res)
        this.setState({
            email: res
        })
    }

    onSubmitForm =() => {
        if (this.state.email === '' || this.state.password === '' ) {
            alert("You forgot to type email or password..");
        } else {
            if (this.props.route === 'touroku') {
                this.props.onRouteChange('loading');
            }
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
                    if (response === 'wrong credentials') {
                        // this.props.onRouteChange('mistake');
                        console.log('ここチェック', response);
                        this.props.routeCheck('/mistake');
                    } else {
                        console.log('ここチェック', response);
                        this.props.onIsSignedInChange(response.username, response.email, response.country, response.status, response.id);
                        // this.props.onRouteChange('/');
                    }
                })
        }
    }


    render() {
            return (
                <main className="pa4">
                    <div className="tc fl w-100 w-100-ns tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt4-ns ">
                            <div className="db f2-ns f3 pv5-ns pv4 fl w-100 w-100-ns tc fw6 ph0 mh0">User login</div>
                            <div className="pt4">
                                <label className="db fw6 lh-copy f6 pt2" htmlFor="name">email</label>
                                <input
                                    placeholder=""
                                    className='pa2-ns pa2 input-reset hover-black hover-bg-white br-pill w-100 w-70-ns btnSS b pointer white f6'
                                    type="text"
                                    name="email"
                                    id="email"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="pt4">
                                <label className="db fw6 lh-copy f6" htmlFor="name">password</label>
                                <input
                                    className='pa2-ns pa2 input-reset hover-black hover-bg-white br-pill w-100 w-70-ns btnSS b pointer white f6'
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>


                        <div className="pv5-ns pv3">
                            {/*<Link to={this.onSubmitForm} onClick={this.onSubmitForm()} className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6"*/}
                            {/*>Log in</Link>*/}
                            <button onClick={this.onSubmitForm} className='btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6'>Log in</button>
                            {/*<input*/}
                                {/*// to={this.state.link}*/}
                                  {/*onClick={this.onSubmitForm}*/}
                                  {/*className="btnSS b tc ph3 pv2 ma3 ba b--white white br-pill pointer f6"*/}
                                  {/*type="submit"*/}
                                  {/*value="Log in"*/}
                            {/*/>*/}
                        </div>
                        <label className="">New to Recotto?</label>
                        <button className='btnSS b tc ph2 pv1 ma3 ba b--white white br-pill pointer f6'>
                            <Link to="/userSignUp" style={{color: 'white'}}>Sign up</Link></button>
                        {/*<button onClick={() => this.props.onRouteChange('userSignUp')}  className="btnSS b tc ph2 pv1 ma3 ba b--white white br-pill pointer f6">Sign*/}
                            {/*up</button>*/}
                        <div className="mv2">
                            <label className="">Forgot password?</label>
                            <button className='btnSS b tc ph2 pv1 ma3 ba b--white white br-pill pointer f6'>
                                <Link to="/reset" style={{color: 'white'}}>Reset</Link></button>
                        </div>
                        <div className='pv7-ns pv6'>

                        </div>
                    </div>
                </main>

            );

    }

}

export default UserLogin;