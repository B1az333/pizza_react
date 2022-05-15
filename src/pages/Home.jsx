import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas } from '../redux/slices/pizzas';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/slices/filters';
import { addPizzaCart } from '../redux/slices/cart';

const categories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];

const sortTypes = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const addedPizzas = useSelector(({ cart }) => cart.items);

    const countTypePizza = (idPizza) => {
        let count = 0;
        Object.keys(addedPizzas).map((key) => {
            if(addedPizzas[key].id === idPizza) count += addedPizzas[key].count;
        })
        return count;
    }
    // console.log(addedPizzas[345]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSelectSortPopup = React.useCallback((sortType) => {
        dispatch(setSortBy(sortType));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(() => {
        // if (!pizzas.length) {
            dispatch(fetchPizzas({ category, sortBy }));
        // }
    }, [category, sortBy]); // eslint-disable-line react-hooks/exhaustive-deps

    const addPizzaToCart = (pizzaObj) => {
        dispatch(addPizzaCart(pizzaObj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onSelectCategory} activeCategory={category} categories={categories} />
                <SortPopup onClickSortPopup={onSelectSortPopup} sortTypes={sortTypes} activeSortPopup={sortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map((pizza, index) => (
                          <PizzaBlock countAddedTypeOfPizza={countTypePizza(pizza.id)} onClickAddPizza={addPizzaToCart} {...pizza} key={`${pizza.id}_${index}`} />
                      ))
                    : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={`${_}_${index}`} />)
                    }
            </div>
        </div>
    );
}

Home.propTypes = {
    dataPizzas: PropTypes.array.isRequired
};

Home.defaultProps = {
    dataPizzas: []
};

export default Home;
