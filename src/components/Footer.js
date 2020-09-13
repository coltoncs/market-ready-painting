import React from 'react';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    &copy;2020 <strong>Market Ready Painting</strong> <a href="https://www.facebook.com/MarketReadyPaintingNC" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social" icon={faFacebook}/></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;