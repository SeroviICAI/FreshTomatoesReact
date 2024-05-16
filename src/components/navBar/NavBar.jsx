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
        this.props.onLogout();
    }

    render() {
        const { login, onLogout, onSearch, onClear } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                                    <NavLink className="nav-link" to={item.path} onClick={onClear}>
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
                                onChange={onSearch}
                            />
                        </form>
                        {login && <NavLink
                            className="auth-button ml-2"
                            to={login ? "/signin" : "/"}
                        >
                            View Profile
                        </NavLink>}
                        <NavLink
                            className="auth-button ml-2"
                            to={!login ? "/signin" : "/"}
                            onClick={login ? this.handleLogout : onClear}
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