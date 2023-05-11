import './Cards.css';
import Card from '../Card/Card';
import { Switch, Route } from 'react-router-dom';

function Cards() {
    return (
        <div>
            <section className="elements">
            <Switch>
                    <Route exact path="/">
                        <Card />
                        <Card /> 
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Route>
                    <Route exact path="/cart">
                        <Card />
                        <Card />
                        <Card />
                    </Route>
                </Switch>
            </section>
        </div>
    );
}

export default Cards;