import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const AppRoutes = ({ search, login, handleLogin, handleClear }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (search !== '') {
            navigate('/movies');
        }
    }, [search, navigate]);

    return (
        <Routes>
            <Route
                path="/signin"
                element= {<SignIn login={login} onLogin={(props) => handleLogin(props)}/>}
            />
            <Route
                path='/movies'
                element={<Catalog search={search} onClear={handleClear}/>}
            />
            <Route
                path='/movies/:id'
                element={<Detail />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
                path="/"
                element={<Home onClear={handleClear}/>}
            />
        </Routes>
    );
};

export default AppRoutes;
