import './menu.css';
import { BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://www.youtube.com/channel/UC9yg06diEl3IyPyPOsDa_oQ">
                <BsYoutube size={24} color='#fff' />
            </a>
            <a className="social" href="https://instagram.com/juliano-soares">
                <BsInstagram size={24} color='#fff' />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}