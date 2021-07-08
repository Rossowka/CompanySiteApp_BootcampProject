import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="banner-split container">
                <p className="rights">Nazwa firmy - wszelkie prawa zastrzeżone, 2021</p>
                <div className="social">
                    <a href="https://www.instagram.com/?hl=pl"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </div>
            </div>
        </footer>
    )
}


export default Footer
