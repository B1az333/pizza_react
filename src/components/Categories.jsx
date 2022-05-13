import classNames from 'classnames';
import React from 'react';

const Categories = React.memo(
    function Categories({ categories, onClickItem }) {
        const [activeCategory, setActiveCategory] = React.useState(null);
    
        const onSelectCategory = (index) => {
            setActiveCategory(index);
            onClickItem(index);
        }
    
        // console.log('rerendeer');
    
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
)


export default Categories;
