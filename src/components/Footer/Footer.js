import './Footer.css';
import HeaderNavMenu from '../HeaderNavMenu/HeaderNavMenu';
import ContactDetails from '../ContactDetails/ContactDetails';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__box">
            <HeaderNavMenu />
            <ContactDetails />
        </div>
    </div>
  );
}

export default Footer;