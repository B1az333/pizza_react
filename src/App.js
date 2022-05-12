import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {Header} from './components';
import {Home, Cart} from './pages';

function App() {
    const [dataPizzas, setDataPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setDataPizzas(data.pizzas);
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home dataPizzas={dataPizzas}/>} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
