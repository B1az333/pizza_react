import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/slices/pizzas'
import {Header} from './components';
import {Home, Cart} from './pages';

function App() {
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        function axiosPizzas() {
            axios.get('http://localhost:3000/db.json').then(({data}) => {
                dispatch(setPizzas(data.pizzas));
            })
        }
        axiosPizzas()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
