import './HeaderNavMenu.css';

function HeaderNavMenu() {
  return (
    <ul className="header-links">
        <li className="header-link"><a className="header-link-text" href="#">Каталог</a></li>
        <li className="header-link"><a className="header-link-text" href="#">Доставка</a></li>
        <li className="header-link"><a className="header-link-text" href="#">Корзина</a></li>
        <li className="header-link"><a className="header-link-text" href="#">Контакты</a></li>
        <li className="header-link"><a className="header-link-text" href="#">О компании</a></li>
    </ul>
  );
}

export default HeaderNavMenu;