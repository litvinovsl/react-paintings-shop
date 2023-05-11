import './ContactDetails.css';
import phoneIcon from '../../images/Phone.svg';
import adressIcon from '../../images/adress.svg'

function ContactDetails() {
  return (
    <div class="contacts">
        <div class="contact">
            <img class="contact__icon" src={phoneIcon} />
            <a class="contact__info contact__info_number" href="tel:+78125555555">+7 (812) 555-55-55</a>
            {/* <p class="contact__info">+7 (812) 555-55-55</p> */}
        </div>
        <div class="contact">
            <img class="contact__icon" src={adressIcon} />
            <p class="contact__info">г. Санкт-Петербург, ул. Ефимова, 3</p>
        </div>

    </div>
  );
}

export default ContactDetails;