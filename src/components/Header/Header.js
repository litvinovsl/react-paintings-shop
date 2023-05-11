import './Header.css';
import HeaderNavMenu from '../HeaderNavMenu/HeaderNavMenu';
import Search from '../Search/Search';

function Header() {
  return (
    <div className="header">
        <div className="header__box">
            <HeaderNavMenu />
            <Search />
        </div>
    </div>
  );
}

export default Header;