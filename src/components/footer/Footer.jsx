import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './footer.css';
import an_amazon_company from "../../assets/images/logo.png";

const SOCIAL_MEDIA_LINKS = [
  { href: "/", icon: "fa-facebook-square" },
  { href: "/", icon: "fa-instagram" },
  { href: "/", icon: "fa-twitch" },
  { href: "/", icon: "fa-twitter" },
  { href: "/", icon: "fa-youtube-play" },
];

const Footer = () => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        const currentYear = new Date().getFullYear(); // or getDateFunction();
        setYear(currentYear);
    }, []);

    return (
        <div className="footer bg-dark">
            <div className="footer-container">
            <div className="container">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href}>
                    <i className={`fa ${link.icon} linked-icons`} aria-hidden="true" />
                    </a>
                ))}
            </div>
            <div className="container">
                <div className="row footer-row footer-mar-top">
                <div className="ml-auto mr-auto footer-res-row">
                    <Link className="col-sm-1 footer-link" to="#">Help</Link>
                    <Link className="col-sm-1 footer-link" to="#">Get the App</Link>
                    <Link className="col-sm-1 footer-link" to="#">Site Index</Link>
                    <Link className="col-sm-1 footer-link" to="#">FreshTomatoes Pro</Link>
                </div>
                </div>
                <div className="footer-row">
                <div className="ml-auto mr-auto footer-res-row">
                    <Link className="col-sm-1 footer-link" to="#">Privacy Policy</Link>
                    <Link className="col-sm-1 footer-link" to="#">Advertising</Link>
                    <Link className="col-sm-1 footer-link" to="#">Conditions of Use</Link>
                </div>
                </div>
                <img
                    width="200px"
                    src={an_amazon_company}
                />
                <div className="footer-copyright text-center">
                <span className="copyright">© 1990-{year} by</span>
                <Link className="footer-link " to="/">
                    FreshTomatoes.com, Inc.
                </Link>
                </div>

                <div className="footer-copyright text-center">
                <span className="copyright">Developed by:</span>
                <p className="footer-link-no-hover">
                    Sergio Rodríguez, Álvaro Pereira and Jaime Paz
                </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
