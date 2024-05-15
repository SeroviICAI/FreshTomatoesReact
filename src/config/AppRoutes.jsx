import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const AppRoutes = ({ search, login, handleLogin, handleClear }) => {
    return (
        <Routes>
            <Route
                path="/signin"
                element= {<SignIn login={login} onLogin={(props) => handleLogin(props)}/>}
            />
            <Route
                path='/movies'
                element={<Catalog search={search}/>}
            />
            <Route
                path='/movies/:id'
                element={<Detail />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
                path="/"
                element={<Home />}
            />
        </Routes>
    );
};

export default AppRoutes;
