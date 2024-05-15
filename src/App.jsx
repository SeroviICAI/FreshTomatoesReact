import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

import AppRoutes from "./config/AppRoutes";

class App extends Component {
    state = {
        search: "",
        login: false,
    };

    handleSearch = (e) => {
        this.setState({ search: e.currentTarget.value });
    };

    handleClear = () => {
        document.getElementById("searchForm").reset();
        this.setState({ search: "" });
    };
    
    handleLogin = (props) => {
        const { login } = this.state;
        this.setState({ login: !login });
        !login && props;
    };

    render() {
        const { search, login } = this.state;

        return (
            <Router>
                <NavBar
                    login={login}
                    onLogout={this.handleLogin}
                    onSearch={this.handleSearch}
                    onClear={this.handleClear}
                />
                <div className="container">
                    <AppRoutes
                        search={search}
                        login={login}
                        handleLogin={this.handleLogin}
                        handleClear={this.handleClear}
                    />
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
