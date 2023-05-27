import React, {useMemo} from 'react';
import { cars as carsData} from './cars.data.js';
import { useState } from 'react';
import '../../../assets/styles/global.css';
import styles from './Home.module.css';
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
function Home() {
    const [cars, setCars] = useState(carsData)
    return (
        <div>
            <h1>Cars catalog 1</h1>
            <CreateCarForm setCars={setCars}></CreateCarForm>
            <div>
                {cars.length ? cars.map((car) => (
                    <CarItem key={car.id} car={car}></CarItem>
                ))
                : <p>There are not cars</p>
                }
            </div>
        </div>
    );
}

export default Home;