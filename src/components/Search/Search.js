import './Search.css';

function Search() {
  return (
    <form class="search-form">
        <input class="search-form__input" type="text" placeholder="Поиск по названию картины" />
        <button class="search-form__button" type="button">Найти </button>
    </form>
  );
}

export default Search;