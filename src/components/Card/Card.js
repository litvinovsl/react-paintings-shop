import './Card.css';
import addIcon from '../../images/add.svg';
import image from '../../images/vechere.png'

function Card() {
    return (
        <div class="card">
            <img class="card__img" src={image} alt='#' />
            <h3 class="card__title" >«Тайная вечеря» Леонардо да Винчи</h3>
            <div class="card__price-conteiner">
                <div class="card__price-all">
                    <p class="card__price card__old-price">1 000 000 $</p>
                    <p class="card__price card__new-price">500 000 $</p>
                </div>
                {/* <button class="card__add" >Купить</button> */}
                <button v-else class="card__add card__add_added" >
                    <img src={addIcon} />
                    <p class="card__btn-text">В корзине</p>
                </button>
            </div>
            {/* <p v-else class="card_no-price">Продана на аукционе</p> */}
        </div>
    );
}

export default Card;