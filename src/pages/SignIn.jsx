import React, { Component } from "react";

import Login from "../components/signIn/Login";
import Register from "../components/signIn/Register";

import "../styles/signIn.css";

class SignIn extends Component {
    state = {
        login: true,
        register: false
    };

    handleSignIn = () => {
        this.setState({ login: true, register: false});
    };

    handleRegister = () => {
        this.setState({ login: false, register: true});
    };

    render() {
        const { login, register } = this.state;
        const { onLogin } = this.props;

        return (
            <div className="row default">
                <div className="col-md div-left">
                    <div className="row neg-margin">
                        <div className="col-md">
                            <h3 className="h3 left-div-heading">
                                Benefits of your free Fresh Tomatoes account
                            </h3>
                        </div>
                    </div>
                    <br />
                    <div className="left-border">
                        <h5 className="sub-heading">Personalized Recommendations</h5>
                    </div>
                    <p className="sub-script">Discover shows you'll love.</p>

                    <div className="left-border">
                        <h5 className="sub-heading">Your Ratings</h5>
                    </div>
                    <p className="sub-script">
                    Rate and remember everything you've seen.
                    </p>

                    <div className="left-border">
                        <h5 className="sub-heading">Contribute to Fresh Tomatoes</h5>
                    </div>
                    <p className="sub-script">
                    Add data that will be seen by millions of people and get cool
                    badges.
                    </p>
                    <br />
                </div>
                <div className="col-md div-right">
                    {login && (
                        <Login
                            register={this.handleRegister}
                            onLogin={onLogin}
                        />
                    )}
                    {register && (
                        <Register
                            login={this.handleSignIn}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default SignIn;
