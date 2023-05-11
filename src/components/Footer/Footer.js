import './Footer.css';
import HeaderNavMenu from '../HeaderNavMenu/HeaderNavMenu';
import ContactDetails from '../ContactDetails/ContactDetails';

function Footer() {
  return (
    <div class="footer">
        <div class="footer__box">
            <HeaderNavMenu />
            <ContactDetails />
        </div>
    </div>
  );
}

export default Footer;