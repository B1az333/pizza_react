// import axios from 'axios'; //
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux'; //


import {Header} from './components';
import {Home, Cart} from './pages';
// import { setPizzas } from './redux/slices/pizzas'; // 

function App() {
    // const dispatch = useDispatch(); //

    // window.test = () => {
    //     axios.get('http://localhost:3000/db.json').then(({data}) => { 
    //             dispatch(setPizzas(data.pizzas));
    //         })
    // }
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
