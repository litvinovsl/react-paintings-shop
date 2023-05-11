import './HeaderNavMenu.css';

function HeaderNavMenu() {
  return (
    <ul class="header-links">
        <li class="header-link"><a class="header-link-text" href="#">Каталог</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Доставка</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Корзина</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Контакты</a></li>
        <li class="header-link"><a class="header-link-text" href="#">О компании</a></li>
    </ul>
  );
}

export default HeaderNavMenu;