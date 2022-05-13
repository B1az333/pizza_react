import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

const categories = [
    'Мясные',
    'Вегетерианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortTypes = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]


function Home() {
    const {pizzas } = useSelector(({pizzas, filters}) => ({
        pizzas: pizzas.pizzas, 
        // sortBy: filters.sortBy 
    }))
    console.log( pizzas);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => console.log(name)} categories={categories} />
                <SortPopup sortTypes={sortTypes} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map((pizza, index) => 
                    <PizzaBlock {...pizza} key={`${pizza.id}_${index}`}/>
                )}
            </div>
        </div>
    );
}

Home.propTypes = {
    dataPizzas: PropTypes.array.isRequired
};

Home.defaultProps = { // по дефолту выставляет значения, если те не корректны
    dataPizzas: []
};

export default Home;
