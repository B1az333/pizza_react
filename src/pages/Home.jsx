import React from 'react';
import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock } from '../components';

const categories = [
    'Мясные',
    'Вегетерианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortTypes = [
    'популярности',
    'цене',
    'алфавиту'
]


function Home({dataPizzas}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => console.log(name)} categories={categories} />
                <SortPopup sortTypes={sortTypes} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {dataPizzas.map((pizza, index) => 
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
