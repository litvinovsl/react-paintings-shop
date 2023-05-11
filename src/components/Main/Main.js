import './Main.css';
import Cards from '../Cards/Cards';

function Main() {
    return (
        <div className="main-page">
            <h2 className="main-page__h">Картины эпохи Возрождения</h2>
            <Cards />
        </div>
    );
}

export default Main;