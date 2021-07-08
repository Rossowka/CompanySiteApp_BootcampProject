import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="banner-split container">
                <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2021</p>
                <div className="social">
                    <i href="https://www.instagram.com/?hl=pl"><FontAwesomeIcon icon={faInstagram} /></i>
                    <i href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></i>
                </div>
            </div>
        </footer>
    )
}


export default Footer;