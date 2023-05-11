import './Search.css';

function Search() {
  return (
    <form className="search-form">
        <input className="search-form__input" type="text" placeholder="Поиск по названию картины" />
        <button className="search-form__button" type="button">Найти </button>
    </form>
  );
}

export default Search;