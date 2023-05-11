import './HeaderNavMenu.css';
import { Link } from 'react-router-dom';

function HeaderNavMenu() {
  return (
    <ul className="header-links">
        <li className="header-link"><Link to='/' className="header-link-text">Каталог</Link></li>
        <li className="header-link"><Link to='/delivery' className="header-link-text">Доставка</Link></li>
        <li className="header-link"><Link to='/cart' className="header-link-text">Корзина</Link></li>
        <li className="header-link"><Link to='/contacts' className="header-link-text">Контакты</Link></li>
        <li className="header-link"><Link to='/about' className="header-link-text">О компании</Link></li>
    </ul>
  );
}

export default HeaderNavMenu;