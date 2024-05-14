import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog />}
            />
            <Route
                path='/:category/:id'
                element={<Detail />}
            />
            <Route
                path='/:category'
                element={<Catalog />}
            />
            <Route
                path='/'
                element={<Home />}
                index
            />
        </Routes>
    )
}

export default AppRoutes;
