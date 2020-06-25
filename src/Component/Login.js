import React, { Component } from 'react';
import '../App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            psword: ''
        }
    }

    submitFormHandle = e => {
        e.preventDefault();
        console.log('loginInfo' + this.state.user + " | " + this.state.psword);
        let loginInfo = {
            user: this.refs.user.value,
            psword: this.refs.psword.value,
        }

    }

    render() {
        return (
            <Form className="login-form" onSubmit={this.submitFormHandle}>
                <h1>
                    <span className="font-weight-bold"> Travel Planer </span>
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <label>Email</label>
                    <Input type="email" placeholder="Email" ref="user" />

                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <Input type="password" placeholder="Password" ref="psword" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in </Button>
                <div className="text-center pt-3">
                    Or Continue with your social account
                </div>
                <FacebookLoginButton className="mt-3 mb-3" />
                <div className="text-center">
                    <a href="/Sign-up">Sign Up</a>
                    <span className="p-2">|</span>
                    <a href="/forget-password">Forget Password</a>
                </div>
            </Form>
        );
    }
}

export default Login;
