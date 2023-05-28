import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import CarDetail from './screens/car-detail/CarDetail.jsx';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    );
};

export default Router;
