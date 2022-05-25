import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoC from '../../assets/images/logo-c.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>  <div className="nav-bar">
<Link className="logo" to="/">
    <img src={LogoC} alt="logo" />
    <img className="sub-logo" src={LogoSubtitle} alt="Jaws" />
</Link>
<nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
    </NavLink>        
</nav>
<ul>
    <li>
        <a 
        target="_blank" 
        rel='noreferrer' 
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
            <FontAwesomeIcon icon={faLinkedin} color="#0000cd" />
        </a>
    </li>
    <li>
        <a 
        target="_blank" 
        rel='noreferrer' 
        href="https://github.com/Montyking20">
            <FontAwesomeIcon icon={faGithub} color="#0000cd" />
        </a>
    </li>
</ul>
</div>


export default Sidebar