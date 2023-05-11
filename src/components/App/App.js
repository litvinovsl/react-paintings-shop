import './App.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import products from '../../data/products';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [productsData, setProductsData] = useState([])
  // console.log(products)
  const loadProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = products
      resolve(data)
    }, 1000)
  });

  loadProducts.then(data => { setProductsData(data) }).catch(err => console.error(err));

  return (
    <CurrentUserContext.Provider
      value={{ products }}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main title='Картины эпохи Возрождения' />
          </Route>
          <Route exact path='/cart'>
            <Main title='Корзина' />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
