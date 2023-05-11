import './Card.css';
// import { useContext } from 'react';
// import { CurrentUserContext } from '../../context/CurrentUserContext';
import addIcon from '../../images/add.svg';
import image from '../../images/vechere.png';

function Card() {
    // const context = useContext(CurrentUserContext);
	// const {
	// 	products
	// } = context;
    // console.log('Card', products)
    return (
        <div className="card">
            <img className="card__img" src={image} alt='#' />
            <h3 className="card__title" >«Тайная вечеря» Леонардо да Винчи</h3>
            <div className="card__price-conteiner">
                <div className="card__price-all">
                    <p className="card__price card__old-price">1 000 000 $</p>
                    <p className="card__price card__new-price">500 000 $</p>
                </div>
                {/* <button class="card__add" >Купить</button> */}
                <button className="card__add card__add_added" >
                    <img src={addIcon} />
                    <p className="card__btn-text">В корзине</p>
                </button>
            </div>
            {/* <p v-else class="card_no-price">Продана на аукционе</p> */}
        </div>
    );
}

export default Card;