import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logout } from '../../helpers/fetchLogin';
import "./navBar.css";

const NAV_ITEMS = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Movies",
        path: "/movies"
    },
    {
        display: "TV Shows",
        path: "/tvshows"
    },
    {
        display: "Episodes",
        path: "/episodes"
    }
];

class NavBar extends Component {
    handleLogout = () => {
        logout();
        this.props.onClear();
        this.props.onLogout();
    }

    render() {
        const { login, onLogout, onChange, OnClear } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                    <img
                        className="navbar-logo"
                        src={logo}
                        alt="Logo"
                    />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            NAV_ITEMS.map((item, index) => (
                                <li
                                    key={index}
                                    className="nav-item"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show"
                                >
                                    <NavLink className="nav-link" to={item.path} onClick={this.props.onClear}>
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="form-inline">
                        <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="form-control search-box"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={onChange}
                            />
                        </form>
                        <NavLink
                            className="auth-button ml-2"
                            to={!login ? "/signin" : "/"}
                            onClick={login ? this.handleLogout : () => {}}
                        >
                            {!login ? "Sign In" : "Sign Out"}
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
