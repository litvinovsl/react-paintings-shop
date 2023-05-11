import './App.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import products from '../../data/products';
import { useState } from 'react';

function App() {
  const [productsData, setProductsData] = useState([])
  // console.log(products)
  const loadProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = products
      resolve(data)
    }, 1000)
  });

  loadProducts.then(data => { setProductsData(data); console.log(productsData) }).catch(err => console.error(err));

  return (
    <CurrentUserContext.Provider
      value={{products}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
