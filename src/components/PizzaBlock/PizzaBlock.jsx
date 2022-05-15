import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { allSizes, typeNames } from '../../constants';
import Button from '../Button';

const PizzaBlock = React.memo(function PizzaBlock({ id, name, imageUrl, price, sizes, types, onClickAddPizza, countAddedTypeOfPizza }) {
    const [activeType, setActiveType] = React.useState(types[0]);
    const onSelectType = (index) => {
        setActiveType(index);
    };

    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    const addPizza = () => {
        const pizzaObj = {
            id,
            name,
            imageUrl,
            price,
            type: activeType,
            size: activeSize,
        };
        onClickAddPizza(pizzaObj);
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((typeName, index) => (
                        <li
                            onClick={() => onSelectType(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}
                            key={`${typeName}_${index}`}>
                            {typeName}
                        </li>
                    ))}
                </ul>
                <ul>
                    {allSizes.map((size, index) => (
                        <li
                            onClick={() => onSelectSize(size)}
                            className={classNames({
                                active: activeSize === size,
                                disabled: !sizes.includes(size),
                            })}
                            key={`${size}_${index}`}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₴</div>
                <Button onClick={addPizza} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {!!countAddedTypeOfPizza && <i>{countAddedTypeOfPizza}</i>}
                </Button>
            </div>
        </div>
    );
});

PizzaBlock.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    types: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    onClickAddPizza:PropTypes.func.isRequired,
    countAddedTypeOfPizza:PropTypes.number.isRequired
};

PizzaBlock.defaultProps = {
    id: 0,
    name: '',
    imageUrl: 'url', 
    price: 0, 
    sizes: [], 
    types: []
};

export default PizzaBlock;
