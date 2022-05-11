import classNames from 'classnames';
import React, { useState } from 'react';

function Categories({ categories, onClick }) {
    const [activeCategory, setActiveCategory] = useState(null);

    const onSelectCategory = (index) => {
        setActiveCategory(index)
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectCategory(null)} className={classNames({'active' : activeCategory === null})}>Все</li>
                {categories?.map((category, index) => 
                    <li onClick={() => onSelectCategory(index)}  className={classNames({'active' : index === activeCategory})} key={`${category}_${index}`}> {category} </li>
                )}
            </ul>
        </div>
    );
}

export default Categories;
