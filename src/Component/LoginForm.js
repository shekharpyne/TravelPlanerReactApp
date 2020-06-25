import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import UserProfile from './UserProfile';

import '../App.css';
import axio from 'axios';

import Search from './Search'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            user: '',
            password: '',
            jwtToken: '',
            errorMsg: ''
        }
    }

    toggleForm = (user, isOpen) => {
        this.setState({
            isOpen: isOpen,
            user: user
        });
    }

    submitFormHandle(e) {

        e.preventDefault();
        let userid = this.refs.user.value;
        let password = this.refs.password.value;

        if (userid.length === 0 || password.length === 0) {
            this.setState({
                errorMsg: 'userId/Password can\'t be blank'
            })
            return;
        }
        let { jwtToken, isOpen } = this.state;

        let apiUrl = 'http://desktop-11nrfkr:8090/api/authenticate';
        axio.post(apiUrl, {
            "userId": userid,
            "password": password
        }).then(response => {
            if (response.data.length > 0) {
                UserProfile.setName(userid);
                this.setState({
                    user: userid,
                    jwtToken: response.data,
                    isOpen: !isOpen,
                })
            } else {
                this.setState({
                    errorMsg: 'Wrong userId/Password'
                })
            }

        })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: 'Error in retriving data' })
            })
    }

    resetFields() {
        this.refs.password.value = "";
        this.refs.user.value = "";
    }

    renderForm() {

        let { isOpen, user, jwtToken, errorMsg } = this.state;

        if (!isOpen) {
            console.log('JWT: ' + jwtToken.length);
            return (
                <Search />
            )
        } else {
            return (

                <form onSubmit={(e) => { this.submitFormHandle(e) }} className="login-form" >
                    <div className="card">
                        <div className="card-header">Login Form</div>
                        <br />
                        <div className="card-body">
                            <label>User</label>
                            <input defaultValue={this.user} className="form-control" id="user" type="text" ref="user" />
                            {user === null ? 'UId Cant be Null' : null}
                            <label>Password</label>
                            <input className="form-control" id="password" type="password" ref="password" />
                            <br />
                            <button className="btn-lg btn-dark btn-block" >Login</button>
                            {
                                errorMsg ? <div className="text-center pt-3" style={{ color: 'red' }}> {errorMsg}</div> : null
                            }
                            <div className="text-center">
                                <a href="/Sign-up">Sign Up</a>
                                <span className="p-2">|</span>
                                <a href="/forget-password">Forget Password</a>
                            </div>

                            &nbsp;
                            </div>
                    </div>
                </form>

            );
        }
    }

    render() {
        return (
            <div>

                {this.renderForm()}

            </div>
        );
    }
}

export default LoginForm;