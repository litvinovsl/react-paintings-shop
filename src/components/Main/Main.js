import './Main.css';
import Cards from '../Cards/Cards';
import { Switch } from 'react-router-dom';

function Main(props) {
    return (
        <div className="main-page">
            <h2 className="main-page__h">{props.title}</h2>
            <Cards />
        </div>
    );
}

export default Main;