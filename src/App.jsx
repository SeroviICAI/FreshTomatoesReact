import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import AppRoutes from "./config/AppRoutes";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRoutes/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
