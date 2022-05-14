import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Categories = React.memo(
    function Categories({ activeCategory, categories, onClickCategory }) {
        // const [activeCategory, setActiveCategory] = React.useState(null);

        // console.log(activeCategory);
    
        // console.log('rerendeer');
    
        return (
            <div className="categories">
                <ul>
                    <li onClick={() => onClickCategory(null)} className={classNames({'active' : activeCategory === null})}>Все</li>
                    {categories?.map((category, index) => 
                        <li onClick={() => onClickCategory(index)}  className={classNames({'active' : index === activeCategory})} key={`${category}_${index}`}> {category} </li>
                    )}
                </ul>
            </div>
        );
    }
)

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number(), null]), 
    categories: PropTypes.arrayOf(PropTypes.string).isRequired, 
    onClickItem: PropTypes.func
};

Categories.defaultProps = {
    activeCategory: null, 
    categories: []
};

export default Categories;
