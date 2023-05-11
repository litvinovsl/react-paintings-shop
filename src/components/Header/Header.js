import './Header.css';
import HeaderNavMenu from '../HeaderNavMenu/HeaderNavMenu';
import Search from '../Search/Search';

function Header() {
  return (
    <div class="header">
        <div class="header__box">
            <HeaderNavMenu />
            <Search />
        </div>
    </div>
  );
}

export default Header;